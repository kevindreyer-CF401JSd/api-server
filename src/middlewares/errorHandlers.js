//https://dev.to/nedsoft/central-error-handling-in-express-3aej

class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

const handleError = (err, res) => {
    const { statusCode, message } = err;
    res.status(statusCode).json({
        status: "error",
        statusCode,
        message
    });
};

module.exports = {
    ErrorHandler,
    handleError,
}