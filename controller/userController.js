const User = require('../model/user');

const userController = {
index: async(req,res)=>{
    
  try{
    const user = await User.find();

    if (!user) return res.status(200).json({status:"error", message:"ther is no user"});
    res.status(200).json({
        status:"success",
        message:"successfully retrieved",
        user:user
    })
}catch(e) {
    
    res.status(200).json({
        status:"error",
        message:e.message
    })
}
},
create:async(req,res)=>{
 try {   let user = new User({
        firstname:rew.body.firstname,
        lastname:rew.body.lastname,
        phonenumber:rew.body.phonenumber,
        city:rew.body.city,
        country:rew.body.country
    })

    const result = await User.create(user);
    if (!user) return res.status(200).json({
        status:"success",
        message:"successfully created",
        user:user
    })
}catch(e) {
    
    res.status(200).json({
        status:"error",
        message:e.message
    })
}
},
update: async(req,res,next)=>{
    try{
    

   const {
        code,
        firstname,
        lastname,
        phonenumber,
        city,
        country
    } = req.body;
   const user = await User.findOne({_id:code})

    if(!user) return res.status(200).json({status: "error", message: 'item not found'})

    const newUser = await User.findByIdAndUpdate({_id:code}, {$set:{
        firstname:firstname,
        lastname:lastname,
        phonenumber:phonenumber,
        city:city,
        country:country
    },
 },
 {new:true});

    await newUser.save();

    if(newUser) return res.status(200).json({status: "error", message: "item updated successfully", newUser: newUser});
            else return res.status(200).json({status: "error", message: "item update failed"});
        } 
    
        catch (e) {
            console.log(e);
            return  res.status(500).json({status: "error", message: e.message})
        } 
    },

destroy: async(req,res,next) =>{
try {
    const {ObjectId } = req.body;

    var users = await User.findOne({_id:ObjectId});
    if (!users) return res.status(200).json({status:"error", message:"cannot find the file"});

    const result = await User.deleteOne({_id:ObjectId});
    if (result) {
        return res.status(200).json({status: "success", message:"item deleted" });
    } else {
        return res.status(200).json({status: "error",  message:"deleting item failed" }); 
    }
}
catch (e){
    console.log(e);
    res.status(200).json({status:"error", message: e.message})
}
}
}
module.exports = userController


