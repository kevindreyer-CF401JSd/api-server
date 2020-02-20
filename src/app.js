// resources
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

// app-level middleware --------------
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

// Routes
const authorsRouter = require('./api/authorsrouter.js')
app.use(authorsRouter);
// categories

app.get('t', (req, res) => {
    throw new Error('500 error');
})

app.get('/this_route_will_error', (req, res) => {
    throw new Error('Yo this is an error');
})

// Error Catch-alls
const {notFoundHandler, internalServerErrorHandler} = require('./middlewares/errorHandlers.js')
app.use(notFoundHandler)
app.use(internalServerErrorHandler)

let isRunning = false;

module.exports = {
    server: app,
    start: function (port) {
        if (!isRunning) {
            isRunning = true;
            app.listen(port);
            console.log(``)
        } else {
            console.error('Server is already running!')
        }
    }
}