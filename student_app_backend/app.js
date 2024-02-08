const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const studentRoute=require("./controllers/studentRouter")

//aliasname
const app=express()

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://AswathyAppukuttan:aswathy2001@cluster0.9azl2ct.mongodb.net/studentDb?retryWrites=true&w=majority",
{
  useNewUrlParser:true
}
)

//routing
app.use("/api/student",studentRoute)
//app.get("/",(req,res)=>{
  //  res.send("Hello")
//})

//app.get("/gallery",(req,res)=>{
  //  res.send("Welcome to gallery")
//})

//app.get("/contact",(req,res)=>{
  //  res.send("Welcome to contact")
//})

//app.post("/student",(req,res)=>{
  //  res.send("this is a student page")
//})


app.listen(3001,()=>{
    console.log("server running")
})


