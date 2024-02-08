const mongoose=require("mongoose")

const hosptialschema=new mongoose.Schema(
    {
        name:String,
        place:String,
        doctorname:String,
        department:String,
    
    }
)
module.exports=mongoose.model("hosptial",hosptialschema)