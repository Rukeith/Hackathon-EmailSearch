var mongoose = require('mongoose');

module.exports = mongoose.model('Email', {
    local : {
        email: String,
        counter: Number
    }
});
