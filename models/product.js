const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    categoryid: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
    features: { type: String, required: false },
    video: { type: String, required: false },
    price: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;