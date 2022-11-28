var mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const medicationSchema = new mongoose.Schema({
   
    name:{
        type:String
    },
    brand:{
        type:String
    },
    description:{
        type:String
    },
   
}, {timestambs: true}
)


const Medication = mongoose.model('medication',medicationSchema)

module.exports = Medication