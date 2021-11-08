const express = require('express');
const route = express.Router();
const planesController = require('../controllers/planes.controller')

route.get('/', planesController.getAllPlanes)
route.post('/', planesController.addNewPlane)
route.put('/:id', planesController.updatePlane)
route.delete('/:id', planesController.deletePlane)



module.exports = route;