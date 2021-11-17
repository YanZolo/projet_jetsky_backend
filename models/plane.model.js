const mongoose = require('mongoose');

const planeSchema = new mongoose.Schema({
    
        turboprops: {
            title: String,
            images: {
                exterior: String,
                cabin: String
            },
            specification: {
                "PASSENGER CAPACITY": String,
               " MAX RANGE": String,
                "MAX OPERATIONAL SPEED": String,
                "CABIN HEIGHT": String,
                "CABIN WIDTH": String,
                "CABIN LENGTH": String
            },
            description: Array
           
        }

});

module.exports = mongoose.model('plane', planeSchema);