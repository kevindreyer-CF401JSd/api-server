// resources
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// app-level middleware --------------
const {
    ErrorHandler,
    handleError,
    } = require('./middlewares/errorHandlers.js')

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
// Routes
// const Authors = require('./models/authors');
// const authors = new Authors();
// const Categories = require('./models/categories');
// const categories = new Categories();

function getModel (req, res, next) {
    const model = req.params.model
    switch (model) {
        case 'authors':
            req.model = authors;
            // console.log('req.model',req.model)
            next();
            break
        case 'categories':
            req.model = categories;
            next();
            break;
        case 'testerror':
            throw new ErrorHandler(500,'this is an error');
        default:
            console.log(`in default`,model);
            throw new ErrorHandler(404,`Invalid, route '${model}' does not exist`);
    }
}

//bring modelrouter function in here
const {handleGetAll, 
       handleGetOne,
       handlePost,
       handlePut,
       handleDelete} = require('./api/modelrouter')


// get the route 
app.param('model', getModel);
// handle the route
app.get('/:model', handleGetAll);
app.get('/:model/:id', handleGetOne);
app.post('/:model', handlePost);
app.put('/:model/:id', handlePut);
app.delete('/:model/:id', handleDelete);

app.get('/error', (req, res) => {
    throw new ErrorHandler(500, 'Internal server error');
})

    // if (error) {
// const {notFoundHandler} = require('./middlewares/errorHandlers.js')
// app.use(notFoundHandler);

app.use((err, req, res, next) => {
    handleError(err, res);
});

// const {internalServerErrorHandler} = require('./middlewares/errorHandlers.js')
// app.use(internalServerErrorHandler);
    // } else {

    // }


// // Error Catch-alls



// const {notFoundHandler} = require('./middlewares/errorHandlers.js')
// app.use(notFoundHandler);
// const {internalServerErrorHandler} = require('./middlewares/errorHandlers.js')
// app.use(internalServerErrorHandler);



let isRunning = false;

module.exports = {
    server: app,
    start: function (port) {
        if (!isRunning) {
            isRunning = true;
            app.listen(port);
            console.log(`Listening on port ${port}...`)
        } else {
            console.error('Server is already running!')
        }
    }
}