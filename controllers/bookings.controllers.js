const bookingModel = require('../models/booking.model')


module.exports.getAllBooking = async (req, res) => {
    bookingModel.find()
        .then((bookings) => res.status(200).json(bookings))
        .catch((err) => res.status(500).json("Error: " + err));
};


module.exports.addNewBooking = async (req, res) => {
    const newbookings = new bookingModel(req.body)
    await newbookings.save()
        .then(() => res.status(200).json(newbookings))
        .catch((err) => res.status(500).json("Error: " + err));
};

module.exports.deleteBooking = async (req, res) => {

    await bookingModel.findByIdAndDelete(req.params.id)
        .then((booking) => res.status(200)
            .json({ message: "Successfully delete", booking }))
        .catch((err) => res.status(500).json("Error: " + err));
};

module.exports.updateBooking = async (req, res) => {
    await bookingModel.findByIdAndUpdate(req.params.id, req.body)
        .then(res.status(200).json("Booking updated!"))
        .catch((err) => res.status(500).json("Error: " + err));
};