const Medication = require('../model/medication');

const MedicationController = {
index: async(req,res)=>{
    
        try{
          const medication = await Medication.find();
      
          if (!medication) return res.status(200).json({status:"error", message:"there is no medication"});
          res.status(200).json({
              status:"success",
              message:"successfully retrieved",
              user:medication
          })
      }catch(e) {
          
          res.status(200).json({
              status:"error",
              message:e.message
          })
      }
      },
create:async(req,res)=>{
    try {   let medication = new Medication({
           name:req.body.name,
           brand:req.body.brand,
           description:req.body.description,
          
       })
   
       const result = await Medication.create(medication);
       if (!result) return res.status(200).json({status:"error", message:"creating Medication failed"});
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
    name,
    brand,
    description
    } = req.body;

   const medication = await Medication.findOne({_id:code})

    if(!medication) return res.status(200).json({status: "error", message: 'Medication not found'})

    const newUser = await Medication.findByIdAndUpdate({_id:code}, {$set:{
    name:name,
    brand:brand,
    description:description
 },
},
 {new:true});

    await newUser.save();

    if(newUser) return res.status(200).json({status: "error", message: "Medication updated successfully", newUser: newUser});
            else return res.status(200).json({status: "error", message: "Medication update failed"});
        } 
    
        catch (e) {
            console.log(e);
            return  res.status(500).json({status: "error", message: e.message})
        } 
    },
    destroy: async(req,res,next) =>{
        try {
            const {code } = req.body;
        
            var medication = await Medication.findOne({_id:code});
            if (!medication) return res.status(200).json({status:"error", message:"cannot find the Medication"});
        
            const result = await Medication.deleteOne({_id:code});
            if (result) {
                return res.status(200).json({status: "success", message:"Medication deleted" });
            } else {
                return res.status(200).json({status: "error",  message:"deleting Medication failed" }); 
            }
        }
        catch (e){
            console.log(e);
            res.status(200).json({status:"error", message: e.message})
        }
        }
}

   module.exports = MedicationController