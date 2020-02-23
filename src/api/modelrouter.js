
function handleGetAll (req, res, next) {
    req.model.read()
        .then(result => {
            const output = {
                count: result.length,
                data: result
            }
            res.status(200).json(output);
        })
        .catch(next)
}

function handleGetOne (req, res, next) {
    req.model.read(req.params.id)
        .then(result => {
            const output = {
                count: result.length,
                data: result
            }
            res.status(200).json(output);
        })
        .catch(next)
}

function handlePost (req, res, next) {
    req.model.create(req.body)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(next)
}

function handlePut (req, res, next) {
    req.model.update(req.params.id, req.body)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
}

function handleDelete (req, res, next) {
    req.model.delete(req.params.id)
        .then(result => {
            res.status(202).json(result)
        })
        .catch(next)
}

module.exports = {
    handleGetAll: handleGetAll,
    handleGetOne: handleGetOne,
    handlePost: handlePost,
    handlePut: handlePut,
    handleDelete: handleDelete
}