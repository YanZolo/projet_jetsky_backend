const express = require('express');
const route = express.Router();

const bookingsControllers = require('../controllers/bookings.controllers');
const { getAllPlanes } = require('../controllers/planes.controller');

route.get('/', bookingsControllers.getAllBooking)
route.post('/', bookingsControllers.addNewBooking);
route.delete('/:id', bookingsControllers.deleteBooking);
route.patch('/:id', bookingsControllers.updateBooking);


module.exports = route;