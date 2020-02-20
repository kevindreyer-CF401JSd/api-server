// resources
const express = require('express');
const morgan = require('morgan');

// app-level middleware --------------
const app = express();
// logger
app.use(morgan('dev'));
// parser
app.use(express.json());

// Routes
const authorsRouter = require('./api/authorsrouter.js')
app.use(authorsRouter);

app.get('/this_will_error', (req, res) => {
    throw new Error('Yo this is an error');
})

// Catch-alls
const notFoundHandler = require('./middlewares/errorStats.js')
app.use(notFoundHandler)

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