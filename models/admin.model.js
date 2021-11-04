const mongoose = require('mongoose');
// const {isEmail} = require('validator')

const adminSchema = new mongoose.model({
    email: String,
    password: String
})

module.exports = mongoose.model('admin', adminSchema)