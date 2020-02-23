function notFoundHandler (req, res, next) {
    console.log('in 404 not found');
    res.status(404).json({ error: 'Resource Not Found' })
}
function internalServerErrorHandler (err, req, res, next) {
    console.log('in 500 internal error');
    res.status(500).json({ error: err.message })
}

module.exports = {
    notFoundHandler: notFoundHandler,
    internalServerErrorHandler: internalServerErrorHandler
}