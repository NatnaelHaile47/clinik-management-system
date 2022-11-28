var mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const prescribesSchema = new mongoose.Schema({
   physician :{
        type:string
    },
   
    patient:{
        type:String
    },
    medication:{
        type:String
    },
    date:{
        type:String
    },
    appointment:{
        type:String
    },
    dose:{
        type:String
    },
}, {timestambs: true}
)


const Prescribes = mongoose.model('prescribes',prescribesSchema)

module.exports = Prescribes