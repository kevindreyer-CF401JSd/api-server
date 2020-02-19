const Model = require('./mongo-model');
const schema = require('./authors-schema');

class Authors extends Model {
    constructor () {
        super(schema);
    }
}


module.exports = Authors;