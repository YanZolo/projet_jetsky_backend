
const PlaneModel = require('../models/plane.model')
const ObjectID = require('mongoose').Types.ObjectId

module.exports.getAllPlanes = async (req, res) => {
    const planes = await PlaneModel.find();
    res.json(planes)
};

module.exports.addNewPlane = async (req, res) => {
    const newPlane = new PlaneModel(req.body)
    try {
        if (await newPlane.save()) return res.status(201).json({ message: 'successfully created' })
        res.status(401).json({ message: 'please try again' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

module.exports.updatePlane = async (req, res) => {
    if (!ObjectID.isValid(req.params.id)) return res.status(401).json({ message: 'incorrect id' + req.params.id })
    console.log(req.params.id)
    console.log(req.body)
    try {
      const data = await PlaneModel.findByIdAndUpdate(
             req.params.id ,
            {
                $set: { constructeur: req.body.constructeur }
            },
            {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true
            }
            
        )
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

// module.exports.deletePlane = async (req, res) => {
//     const plane = await PlaneModel.findByIdAndRemove(
//         req.params.id)
//         .then((data)=>  res.status(200).json(data))
//         .catch((err)=> res.status(500).json(err))1

// }



