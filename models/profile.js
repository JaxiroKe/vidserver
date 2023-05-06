const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: { type: Number, required: false },
    phone: { type: String, required: false },
    bio: { type: String, required: false },
    address: { type: String, required: false },
    dobirth: { type: String, required: false },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('profile', ProfileSchema);
