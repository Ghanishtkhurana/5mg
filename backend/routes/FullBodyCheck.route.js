const express=require("express")
const {FullBodyCheckModel}=require("../models/FullBodyCheck.model")
const fullBodyCheckRouter=express.Router()


fullBodyCheckRouter.get("/",async(req,res)=>{
    try{
       const fullBodyCheck= await FullBodyCheckModel.find()
       res.send(fullBodyCheck)
    }catch(err){
       console.log(err)
       res.send("Something Went Wrong")
    }
 })
 
 
fullBodyCheckRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
     const newNote= new FullBodyCheckModel(payload)
     await newNote.save()
     res.send("Created a test")
    }catch(err){
     console.log(err)
     res.send({"msg":"Something Went Wrong"})
    }
 })


 module.exports={
    fullBodyCheckRouter
 }
 