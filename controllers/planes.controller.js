const PlaneModel = require('../models/plane.model')

module.exports.getAllPlanes = async (req, res) => {
const planes = await PlaneModel.find();
console.log(planes)
res.json(planes)
};



