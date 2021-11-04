const express = require('express');
const route = express.Router();

const bookingsControllers = require('../controllers/bookings.controllers');

route.post('/', bookingsControllers.addNewBooking);


module.exports = route;