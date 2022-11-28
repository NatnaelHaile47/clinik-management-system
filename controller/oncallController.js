const Oncall = require('../model/oncall');

const OncallController = {
index: async(req,res)=>{
    
        try{
          const oncall = await Oncall.find();
      
          if (!oncall) return res.status(200).json({status:"error", message:"there is no Oncall"});
          res.status(200).json({
              status:"success",
              message:"successfully retrieved",
              user:oncall
          })
      }catch(e) {
          
          res.status(200).json({
              status:"error",
              message:e.message
          })
      }
      },
create:async(req,res)=>{
    try {   let oncall = new Oncall({
           nurse:req.body.nurse,
           blockcode:req.body.blockcode,
           blockfloor:req.body.blockfloor,
           start:req.body.start,
           end:req.body.end
          
       })
   
       const result = await Oncall.create(oncall);
       if (!result) return res.status(200).json({status:"error", message:"creating Oncall failed"});
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
           nurse,
           blockcode,
           blockfloor,
           start,
           end
          
    } = req.body;

   const oncall = await Oncall.findOne({_id:code})

    if(!oncall) return res.status(200).json({status: "error", message: 'Oncall not found'})

    const newUser = await Oncall.findByIdAndUpdate({_id:code}, {$set:{
        nurse:nurse,
        blockcode:blockcode,
        blockfloor:blockfloor,
        start:start,
        end:end
       
 },
},
 {new:true});

    await newUser.save();

    if(newUser) return res.status(200).json({status: "error", message: "Oncall updated successfully", newUser: newUser});
            else return res.status(200).json({status: "error", message: "Oncall update failed"});
        } 
    
        catch (e) {
            console.log(e);
            return  res.status(500).json({status: "error", message: e.message})
        } 
    },
    destroy: async(req,res,next) =>{
        try {
            const {code } = req.body;
        
            var oncall = await Oncall.findOne({_id:code});
            if (!oncall) return res.status(200).json({status:"error", message:"cannot find the Oncall"});
        
            const result = await Oncall.deleteOne({_id:code});
            if (result) {
                return res.status(200).json({status: "success", message:"Oncall deleted" });
            } else {
                return res.status(200).json({status: "error",  message:"deleting Oncall failed" }); 
            }
        }
        catch (e){
            console.log(e);
            res.status(200).json({status:"error", message: e.message})
        }
        }
}

   module.exports = OncallController