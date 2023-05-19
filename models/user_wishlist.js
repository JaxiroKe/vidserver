const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    user: { type: Number, required: true },
    product: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date }
});

module.exports = mongoose.model('UserWishlist', modelSchema);;