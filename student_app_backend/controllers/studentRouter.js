const express=require("express")
const studentModel=require("../models/studentModel")

const router=express.Router()

router.post("/add",async(req,res)=>{    // read data
    let data=req.body                  // value read
    let student=new studentModel(data) 
    let result=await student.save()
    res.json({
        status:"success"
    })
})


router.get("/viewall",(req,res)=>{  // display data
    res.send("this is a view all page")
})

module.exports=router
