var mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const appointmentSchema = new mongoose.Schema({
   
    patient:{
        type:String
    },
    physician:{
        type:String
    },
    nurse:{
        type:String
    },

    start:{
        type:String
    },
    end:{
        type:String
    },
    room:{
        type:String
    },
}, {timestambs: true}
)


const Appointment = mongoose.model('appointment',appointmentSchema)

module.exports = Appointment