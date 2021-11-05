const mongoose = require('mongoose')
const { Schema } = mongoose;

const bookingSchema = new Schema({
    bookingId
})


module.exports = mongoose.model('Booking', bookingSchema)