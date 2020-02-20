function notFoundHandler (req, res, next) {
    res.status(404).json({ error: 'Resource Not Found' })
}
function internalServerErrorHandler (err, req, res, next) {
    res.status(500).json({ error: err.message })
}

module.exports = {
    notFoundHandler: notFoundHandler,
    internalServerErrorHandler: internalServerErrorHandler
}