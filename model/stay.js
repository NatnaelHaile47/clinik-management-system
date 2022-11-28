var mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const staySchema = new mongoose.Schema({
    stayid:{
        type:string
    },
   
    patient:{
        type:String
    },
    room:{
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


const Stay = mongoose.model('stay',staySchema)

module.exports = Stay