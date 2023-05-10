const mongoose = require('mongoose');

const walletSchema = new mongoose.Schema({
    userid: { type: String, required: true },
    title: { type: String, required: false },
    amount: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now }
});

const Wallet = mongoose.model('Wallet', walletSchema);
module.exports = Wallet;