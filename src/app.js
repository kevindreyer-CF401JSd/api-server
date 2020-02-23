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

const routeBase = '/api/v1';

// get the route 
app.param('model', getModel);
// Routes
const Authors = require('./models/authors');
const authors = new Authors();
const Categories = require('./models/categories');
const categories = new Categories();

function getModel (req, res, next) {
    const model = req.params.model
    switch (model) {
        case 'authors':
            req.model = authors;
            next();
            break
        case 'categories':
            req.model = categories;
            next();
            break;
        case 'testerror':
            throw new ErrorHandler(500,'this is an error');
        default:
            throw new ErrorHandler(404,`Invalid, route '${model}' does not exist`);
    }
}

//bring modelrouter function in here
const {handleGetAll, 
       handleGetOne,
       handlePost,
       handlePut,
       handleDelete} = require('./api/modelrouter')

// handle the route
app.get(`${routeBase}/:model`, handleGetAll);
app.get(`${routeBase}/:model/:id`, handleGetOne);
app.post(`${routeBase}/:model`, handlePost);
app.put(`${routeBase}/:model/:id`, handlePut);
app.delete(`${routeBase}/:model/:id`, handleDelete);

app.get('/error', (req, res) => {
    throw new ErrorHandler(500, 'Internal server error');
})

app.get('*', (req, res) => {
    // console.log('req.params', req)
    throw new ErrorHandler(500, `Invalid, route '${req.params[0]}' does not exist, begin routes with '${routeBase}' `);
})

app.use((err, req, res, next) => {
    handleError(err, res);
});

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