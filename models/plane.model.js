const mongoose = require('mongoose');

const planeSchema = new mongoose.Schema({
    constructeur: {
        type: String,
        require: true
    },
    model: {
        type: String,
        require: true
    },
    prixparheure: {
        type: String,
        require: true,
        default: "N/C"
    },
    places: {
        type: String,
        require: true,
        default: "N/C"
    },
    bagages: {
        type: String,
        require: true,
        default: "N/C"
    },
    vitessemax: {
        type: String,
        require: true,
        default: "N/C"
    },
    distancemax: {
        type: String,
        require: true,
        default: "N/C"
    },
    dimensioncabine: [
        {
            longueur: String,
            largeur: String,
            hauteur: String,
        }

    ]

});

module.exports = mongoose.model('plane', planeSchema);