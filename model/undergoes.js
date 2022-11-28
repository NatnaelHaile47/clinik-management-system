var mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const undergoesSchema = new mongoose.Schema({
    
    patient:{
        type:String
    },
    procedure:{
        type:String
    },
    stay:{
        type:String
    },
    date:{
        type:String
    },
    physician:{
        type:string
    },
    nurse:{
        type:string
    },
   
   
}, {timestambs: true}
)


const Undergoes = mongoose.model('undergoes',undergoesSchema)

module.exports = Undergoes