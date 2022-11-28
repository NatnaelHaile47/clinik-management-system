const express = require('express')
const mongoose =require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors');

const blockRoute = require('./routes/blockroute')
const userRoute = require('./routes/userroute')
const appointmentRoute = require('./routes/appointmentroute')
const medicationRoute = require('./routes/medicationroute')
const oncallroute = require('./routes/oncallroute')
//const emrRoute = require('./routes/emrroute')
const patientRoute = require('./routes/patientregistrationroute')
const prescribesRoute = require('./routes/prescribesroute')
const roomRoute = require('./routes/roomroute')
const staffRoute = require('./routes/staffroute')
const stayRoute = require('./routes/stayroute')
const undegoesRoute = require('./routes/undergoesroute')

mongoose.connect("mongodb://127.0.0.1:27017/CMS", {useNewUrlParser: true, useUnifiedTopology: true});

const db=mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('DB database connection is established')
})

const app=express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))
app.use(cors())


const PORT= process.env.PORT || 8080



app.listen(PORT,() => {
    console.log('server is running on port ${PORT}')
})
app.use('/block', blockRoute)
app.use('/user', userRoute)
app.use('/appointment', appointmentRoute)
app.use('/medication', medicationRoute)
app.use('/oncall', oncallroute)
//app.use('/emr', emrRoute)
app.use('/Patient',patientRoute)
app.use('/prescribes', prescribesRoute)
app.use('/room', roomRoute)
app.use('/staff', staffRoute)
app.use('/stay', stayRoute)
app.use('/undergoes', undegoesRoute)

