var mongoose = require('mongoose')
const uuid = require('uuid')
const staffSchema = new mongoose.Schema({
   
    depid:{
        type:String

    },
    name:{
        type:String
    }
}, {timestambs:true}
)
const Staff = mongoose.model('staff',staffSchema)

module.exports = Staff