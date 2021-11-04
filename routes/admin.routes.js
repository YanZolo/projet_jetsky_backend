const express = require('express');
const route = express.Router();
const adminController = require('../controllers/admin.controller')

route.post('/addplanes', adminController.addPlane)


module.exports = route;