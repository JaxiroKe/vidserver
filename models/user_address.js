const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    user: { type: String, required: false },
    line1: { type: String, required: false },
    line2: { type: String, required: false },
    city: { type: String, required: false },
    country: { type: String, required: false },
    coordinates: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserAddress', modelSchema);;