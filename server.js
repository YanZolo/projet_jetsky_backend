require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// routes
const planesRoutes = require('./routes/planes.routes')
app.use(express.json())
const bookingsRoutes = require("./routes/bookings.routes");

const cors = require('cors')
app.use(express.urlencoded({extended : false }))
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.DATA_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error)
});
db.once('open', () => {
    console.log('database is connected')
});

app.use('/planes', planesRoutes);
app.use('/bookings', bookingsRoutes)




app.listen( process.env.PORT, () => {
    console.log(`server started at port: ${process.env.PORT}`);
})