const Block = require('../model/block');

const blockController = {
index: async(req,res)=>{
    
        try{
          const blocks = await Block.find();
      
          if (!blocks) return res.status(200).json({status:"error", message:"there is no blocks"});
          res.status(200).json({
              status:"success",
              message:"successfully retrieved",
              user:blocks
          })
      }catch(e) {
          
          res.status(200).json({
              status:"error",
              message:e.message
          })
      }
      },
create:async(req,res)=>{
    try {   let block = new Block({
           blockfloor:req.body.blockfloor,
           blockcode:req.body.blockcode,
           
       })
   
       const result = await Block.create(block);
       if (!result) return res.status(200).json({status:"error", message:"ther is no user"});
       res.status(200).json({
           status:"success",
           message:"successfully created",
           user:result
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
    
   const{
      code,
      blockcode,
      blockfloor
    } = req.body

   const blocks = await Block.findOne({_id:code})

    if(!blocks) return res.status(200).json({status: "error", message: 'item not found'})

    const newUser = await Block.findByIdAndUpdate({_id:code}, {$set:{
        blockcode:blockcode,
        blockfloor:blockfloor
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
        
            var block = await Block.findOne({_id:ObjectId});
            if (!block) return res.status(200).json({status:"error", message:"cannot find the block"});
        
            const result = await Block.deleteOne({_id:ObjectId});
            if (result) {
                return res.status(200).json({status: "success", message:"block deleted" });
            } else {
                return res.status(200).json({status: "error",  message:"deleting block failed" }); 
            }
        }
        catch (e){
            console.log(e);
            res.status(200).json({status:"error", message: e.message})
        }
        }
}

   module.exports = blockController