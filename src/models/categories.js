const Model = require('./mongo-model');
const schema = require('./categories-schema');

class Categories extends Model {
    constructor () {
        super(schema);
    }
}

module.exports = Categories;