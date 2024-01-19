const mongoose = require('mongoose');

const userdemoSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true
    },
    phonenumber: {
        type: String,
        require:true
    },
    password: {
        type: String,
        require:true
    },
  
    picture: {
        type: String,
    },
    sub: {
        type: String,
    },
});


// Middleware to set 'sub' field equal to 'email' field before saving the document
userdemoSchema.pre('save', function () {
    // Check if 'sub' field is not already set
    if (!this.sub) {
        // Set 'sub' field equal to 'email' field
        this.sub = this.email;
    }
    // next();
});

const Userdemo = mongoose.model('Userdemo', userdemoSchema);
module.exports = Userdemo;
