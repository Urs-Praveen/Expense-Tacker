const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    isPremiumUser: {
        type: Boolean,
        default: false,
    },
    totalExpense: {
        type: Number,
        default: 0,
    },
});

module.exports = mongoose.model('User', User);
