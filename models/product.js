const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    features: { type: String, required: false },
    video: { type: String, required: false },
    price: { type: Number, required: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('product', ProductSchema);
