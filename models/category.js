const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    parent: { type: Number, required: false },
    title: { type: String, required: true },
    description: { type: String, required: false },
    icon: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('category', CategorySchema);
