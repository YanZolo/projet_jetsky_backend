require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const planesRoute = require('./routes/planes.routes')
app.use(express.json())
const adminRoute = require('./routes/admin.routes')
const usersRouter = require('./routes/users.routes')
const bookingsRouter = require("./routes/bookings.routes");
const cors = require('cors')

const ejs = require('ejs')

app.set("view-engine", "ejs")

app.use(express.urlencoded({extended : false }))
app.use(express.json())
app.use(cors())


mongoose.connect(process.env.DATA_URL, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', (error) => {
    console.error(error)
})
db.once('open', () => {
    console.log('database is connected')
})

app.use('/planes', planesRoute);
app.use('/admin', adminRoute);
app.use('/bookings', bookingsRouter)
app.use('/users', usersRouter);



app.listen( process.env.PORT, () => {
    console.log(`server started at port: ${process.env.PORT}`);
})