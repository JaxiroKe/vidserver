const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    categoryid: { type: Number, unique: true },
    parentid: { type: String },
    title: { type: String, required: true, unique: true },
    description: { type: String },
    icon: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', modelSchema);