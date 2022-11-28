var mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const roomSchema = new mongoose.Schema({
    
    number:{
        type:String
    },
    type:{
        type:String
    },
    block:{
        type:String
    },
    unavailable:{
        type:Boolean
    },
   
   
}, {timestambs: true}
)


const Room = mongoose.model('room',roomSchema)

module.exports = Room