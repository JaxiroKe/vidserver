const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    userid: { type: Number, unique: true },
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    firstname: { type: String, required: false },
    lastname: { type: String, required: false },
    password: { type: String, required: true },
    role: { type: Number, default: 5 },
    lastlogin: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date }
});

module.exports= mongoose.model('UserAccount', modelSchema);