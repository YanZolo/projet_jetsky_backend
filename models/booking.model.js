const mongoose = require('mongoose')
const { Schema } = mongoose;

const bookingSchema = new Schema({

    from: {
        type: String,
        require: true,
    },
    to: {
        type: String,
        require: true,
    },
    // departureDateTime: {
    //     type: Date,
    //     required: true,
    // },
    // arrivalsDateTime: {
    //     type: Date,
    //     required: true,
    // }, 
    // passager: {
    //     type: Number,
    // },
    // typeOfFlight: {
    //     type: String,
    // },
    // price:{
    //     type:String
    // },
})


module.exports = mongoose.model('Booking', bookingSchema)