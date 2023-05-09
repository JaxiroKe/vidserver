const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    role: { type: Number, default: 5 },
    lastlogin: { type: String, default: Date.now },
    created_at: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;