const Patient = require('../model/patientregistration');

const PatientController = {
index: async(req,res)=>{
    
        try{
          const patient = await Patient.find();
      
          if (!patient) return res.status(200).json({status:"error", message:"there is no patient"});
          res.status(200).json({
              status:"success",
              message:"successfully retrieved",
              patient:patient
          })
      }catch(e) {
          
          res.status(200).json({
              status:"error",
              message:e.message
          })
      }
      },
create:async(req,res)=>{
    try {   let patient = new Patient({
           firstname:req.body.firstname,
           lastname:req.body.lastname,
           phonenumber:req.body.phonenumber,
           adress:req.body.adress,
           country:req.body.country
          
       })
   
       const result = await Patient.create(patient);
       if (!result) return res.status(200).json({status:"error", message:"creating Patient failed"});
       res.status(200).json({
           status:"success",
           message:"successfully created",
           user:patient
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
           firstname,
           lastname,
           phonenumber,
           adress,
           country
    } = req.body;

   const patient = await Patient.findOne({_id:code})

    if(!patient) return res.status(200).json({status: "error", message: 'Patient not found'})

    const newUser = await Patient.findByIdAndUpdate({_id:code}, {$set:{
        firstname:firstname,
        lastname:lastname,
        phonenumber:phonenumber,
        adress:adress,
        country:country
       
 },
},
 {new:true});

    await newUser.save();

    if(newUser) return res.status(200).json({status: "error", message: "Patient updated successfully", newUser: newUser});
            else return res.status(200).json({status: "error", message: "Patient update failed"});
        } 
    
        catch (e) {
            console.log(e);
            return  res.status(500).json({status: "error", message: e.message})
        } 
    },
    destroy: async(req,res,next) =>{
        try {
            const {code } = req.body;
        
            var patient = await Patient.findOne({_id:code});
            if (!patient) return res.status(200).json({status:"error", message:"cannot find the Patient"});
        
            const result = await Patient.deleteOne({_id:code});
            if (result) {
                return res.status(200).json({status: "success", message:"Patient deleted" });
            } else {
                return res.status(200).json({status: "error",  message:"deleting Patient failed" }); 
            }
        }
        catch (e){
            console.log(e);
            res.status(200).json({status:"error", message: e.message})
        }
        }
}

   module.exports = PatientController