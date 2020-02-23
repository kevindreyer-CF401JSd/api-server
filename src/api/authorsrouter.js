const express = require('express');
const Authors = require('../models/authors.js');
const authors = new Authors();

const router = express.Router();

router.get('/authors', getAllAuthors);
router.get('/authors/:id', getOneAuthor);
router.post('/authors', postAuthor);
router.put('/authors/:id', editAuthor);
router.delete('/authors/:id', deleteAuthor);

//get read
function getAllAuthors (req, res, next) {
    authors.read()
        .then(result => {
            const output = {
                count: result.length,
                data: result
            }
            res.status(200).json(output);
        })
        .catch(next);
}

function getOneAuthor (req, res, next) {
    authors.read(req.params.id)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(next);
}

//post create
function postAuthor (req, res, next) {
    authors.create(req.body)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(next);
}

//edit update
function editAuthor (req, res, next) {
    authors.update(req.params.id, req.body)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next);
}

//delete
function deleteAuthor (req, res, next) {
    authors.delete(req.params.id)
        .then(result => {
            res.status(202).json(result)
        })
        .catch(next);
}

module.exports = router;