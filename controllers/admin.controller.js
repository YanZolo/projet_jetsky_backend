const PlaneModel = require('../models/plane.model')

module.exports.addPlane = async (req, res) => {
    const {constructeur, model} = req.body ; 
    try {
        if(await PlaneModel.create({
            constructeur, model
        }))
        return res.status(201).json({message: 'successfully added'})
    } catch (err){
        return res.status(401).json(err)
    }
}

