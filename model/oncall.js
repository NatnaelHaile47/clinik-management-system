var mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const oncallSchema = new mongoose.Schema({
    
    nurse:{
        type:String
    },
    blockcode:{
        type:String
    },
    blockfloor:{
        type:String
    },
    start:{
        type:String
    },
    end:{
        type:String
    },
   
   
}, {timestambs: true}
)


const Oncall = mongoose.model('oncall',oncallSchema)

module.exports = Oncall