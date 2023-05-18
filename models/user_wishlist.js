const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    user: { type: String, required: false },
    product: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserWishlist', modelSchema);;