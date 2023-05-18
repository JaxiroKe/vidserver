const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    user: { type: String, required: false },
    phone: { type: String, required: false },
    bio: { type: String, required: false },
    address: { type: String, required: false },
    dobirth: { type: String, required: false },
    lastseen: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UserProfile', modelSchema);;