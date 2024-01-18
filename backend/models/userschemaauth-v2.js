const mongoose = require('mongoose');

const userdemoSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phonenumber: {
        type: String,
    },
    password: {
        type: String,
    },
    accountType: {
        type: String,
        enum: ["admin", "user"],
        required: true,
    },
    token: {
        type: String,
    },
    picture: {
        type: String,
    },
    sub: {
        type: String,
    },
});

// Middleware to set 'sub' field equal to 'email' field before saving the document
userdemoSchema.pre('save', function (next) {
    // Check if 'sub' field is not already set
    if (!this.sub) {
        // Set 'sub' field equal to 'email' field
        this.sub = this.email;
    }
    next();
});

const Userdemo = mongoose.model('Userdemo', userdemoSchema);
module.exports = Userdemo;
