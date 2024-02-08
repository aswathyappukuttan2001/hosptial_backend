const express=require("express")
const hosptialModel=require("../models/hosptialModel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let hosptial=new hosptialModel(data)
    let result=await hosptial.save()
    res.json(
        {
            status:"success"
        }
    )
    //res.send("add")
})

router.get("/view",async(req,res)=>{
    let data=await hosptialModel.find()
    res.json(data)
   
})

module.exports=router