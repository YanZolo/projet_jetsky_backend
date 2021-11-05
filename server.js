require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const planesRoute = require('./routes/planes.routes')
app.use(express.json())
const adminRoute = require('./routes/admin.routes')
app.use('/planes', planesRoute);
app.use('/admin', adminRoute);
const usersRouter = require('./routes/users.routes')
const bookingsRouter = require("./routes/bookings.routes");

app.use(express.json())
app.use('/bookings', bookingsRouter)
app.use('/users', usersRouter);






mongoose.connect(process.env.DATA_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error)
})
db.once('open', () => {
    console.log('database is connected')
})





app.listen( process.env.PORT, () => {
    console.log(`server started at port: ${process.env.PORT}`);
})