var mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
   
    firstname:{
        type:String
    },
    lasttname:{
        type:String
    },
    phonenumber:{
        type:String
    },
    city:{
        type:String
    },
    country:{
        type:String
    },
}, {timestambs: true}
)

const User = mongoose.model('user',userSchema)

module.exports = User