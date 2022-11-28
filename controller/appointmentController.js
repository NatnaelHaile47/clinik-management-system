const Appointment = require('../model/appointment');

const AppointmentController = {
index: async(req,res)=>{
    
        try{
          const appointment = await Appointment.find();
      
          if (!appointment) return res.status(200).json({status:"error", message:"there is no appointments"});
          res.status(200).json({
              status:"success",
              message:"successfully retrieved",
              user:appointment
          })
      }catch(e) {
          
          res.status(200).json({
              status:"error",
              message:e.message
          })
      }
      },
create:async(req,res)=>{
    try {   let appointment = new Appointment({
          
           patient:req.body.patient,
           physician:req.body.physician,
           nurse:req.body.nurse,
           start:req.body.start,
           end:req.body.end,
           room:req.body.room,
           
       })
     if(!appointment) return res.status(200).json({status:"error", message:"all inputs required"});
   
       const result = await Appointment.create(appointment);
       if (!result) return res.status(200).json({status:"error", message:"creating appointment failed"});
       res.status(200).json({
           status:"success",
           message:"successfully created",
           appointment:result
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
    patient,
    physician,
    nurse,
    start,
    end,
    room,
    } = req.body;

   const appointments = await Appointment.findOne({_id:code})

    if(!appointments) return res.status(200).json({status: "error", message: 'appointment not found'})

    const newUser = await Appointment.findByIdAndUpdate({_id:code}, {$set:{
    patient:patient,
    physician:physician,
    nurse:nurse,
    start:start,
    end:end,
    room:room,
    },
 },
 {new:true});

    await newUser.save();

    if(newUser) return res.status(200).json({status: "error", message: "appointment updated successfully", newUser: newUser});
            else return res.status(200).json({status: "error", message: "appointment update failed"});
        } 
    
        catch (e) {
            console.log(e);
            return  res.status(500).json({status: "error", message: e.message})
        } 
    },
    destroy: async(req,res,next) =>{
        try {
            const {code } = req.body;
        
            var appointment = await Appointment.findOne({_id:code});
            if (!appointment) return res.status(200).json({status:"error", message:"cannot find the appointment"});
        
            const result = await Appointment.deleteOne({_id:code});
            if (result) {
                return res.status(200).json({status: "success", message:"appointment deleted" });
            } else {
                return res.status(200).json({status: "error",  message:"deleting appointment failed" }); 
            }
        }
        catch (e){
            console.log(e);
            res.status(200).json({status:"error", message: e.message})
        }
        }
}

   module.exports = AppointmentController