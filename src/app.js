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

// Catch-alls



let isRunning = false;

module.exports = {
    server: app,
    start: function (port) {
        if (!isRunning) {
            isRunning = true;
            app.listen(port);
            console.log(``)
        } else {
            console.error('Server is already running!');
        }
        app.listen(port)
    }
}