const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    parentid: { type: String },
    title: { type: String, required: true, unique: true },
    description: { type: String },
    icon: { type: String },
    created_at: { type: Date, default: Date.now }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;