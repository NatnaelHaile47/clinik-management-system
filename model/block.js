var mongoose = require('mongoose')

const blockSchema = new mongoose.Schema({
   
    blockfloor:{
        type:String
    },
    blockcode:{
        type:String
    }
}, {timestambs:true}
)
const Block = mongoose.model('block',blockSchema)

module.exports = Block