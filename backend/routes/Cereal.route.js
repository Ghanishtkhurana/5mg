const express=require("express")
const {CerealModel}=require('../models/Cereal.model')
const cerealRouter = express.Router()


cerealRouter.get("/",async(req,res)=>{
    try{
       const cerealss= await CerealModel.find()
       res.send(cerealss)
    }catch(err){
       console.log(err)
       res.send("Something Went Wrong")
    }
 })
 
 
cerealRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
     const cereal= new CerealModel(payload)
     await cereal.save()
     res.send("Created a cereal")
    }catch(err){
     console.log(err)
     res.send({"msg":"Something Went Wrong"})
    }
 })


 module.exports={
    cerealRouter
 }
 