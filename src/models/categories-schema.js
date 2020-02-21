const mongoose = require('mongoose');

const categoriesSchema = mongoose.Schema({
    subject: { type: String },
    keywords: { type: [String] },
    description: { type: String }
})

module.exports = mongoose.model('categories', categoriesSchema);