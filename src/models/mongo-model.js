// Class of generic mongoose model
class Model {
    constructor (schema) {
        this.schema = schema;
    }

    //Create
    create (record) {
        const newRecord = new this.schema(record);
        return newRecord.save();
    }

    //Read
    read (id) {
        const queryObject = id ? { _id: id } : {};
        return this.schema.find(queryObject);
    }

    //Update
    update (id, record) {
        return this.schema.findByIdAndUpdate(id, record);
    }

    //Delete
    delete (id) {
        return this.schema.findByIdAndDelete(id);
    }

}

module.exports = Model;