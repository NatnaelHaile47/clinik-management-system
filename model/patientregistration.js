var mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const patientSchema = new mongoose.Schema({
    
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    phonenumber:{
        type:String
    },
    adress:{
        type:String
    },
    country:{
        type:String
    },
}, {timestambs: true}
)


const Patient = mongoose.model('patient',patientSchema)

module.exports = Patient