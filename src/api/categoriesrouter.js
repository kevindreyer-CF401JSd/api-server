const express = require('express');
const Categories = require('../models/categories.js');
const categories = new Categories();

const router = express.Router();

router.get('/categories', getAllCategories);
router.get('/categories/:id', getOneCategories);
router.post('/categories', postCategories);
router.put('/categories/:id', editCategories);
router.delete('/categories/:id', deleteCategories);

//get read
function getAllCategories (req, res, next) {
    categories.read()
        .then(result => {
            const output = {
                count: result.length,
                data: result
            }
            res.status(200).json(output);
        })
        .catch(next);
}

function getOneCategories (req, res, next) {
    categories.read(req.params.id)
        .then(result => {
            res.status(200).json(result);
        })
        .catch(next);
}

//post create
function postCategories (req, res, next) {
    categories.create(req.body)
        .then(result => {
            res.status(201).json(result);
        })
        .catch(next);
}

//edit update
function editCategories (req, res, next) {
    categories.update(req.params.id, req.body)
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next);
}

//delete
function deleteCategories (req, res, next) {
    categories.delete(req.params.id)
        .then(result => {
            res.status(202).json(result)
        })
        .catch(next);
}

module.exports = router;