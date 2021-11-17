const mongoose = require('mongoose');

const airportSchema = new mongoose.Schema({
    id: String,
    ident: String,
    type: String,
    name: String,
    latitude_deg: String,
    longitude_deg: String,
    elevation_ft: String,
    continent: String,
    iso_country: String,
    iso_region: String,
    municipality: String,
    scheduled_service: String,
    gps_code: String,
    iata_code: String,
    local_code: String,
    home_link: String,
    wikipedia_link: String,
    keywords: String
})

module.exports = mongoose.model("airport", airportSchema)