const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    template: { type: String },
    textBoxes: { type: [String] },
    imageUrl: { type: String }
})

module.exports = mongoose.model('categories', categoriesSchema);