const mongoose = require('mongoose');

const WalletSchema = new mongoose.Schema({
    user: { type: Number, required: true },
    title: { type: String, required: false },
    amount: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('wallet', WalletSchema);
