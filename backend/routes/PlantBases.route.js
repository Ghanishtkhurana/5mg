const express=require("express")
const {PlantModel}=require('../models/PlantBased.model')
const plantRouter = express.Router()


plantRouter.get("/",async(req,res)=>{
    try{
       const plantsss= await PlantModel.find()
       res.send(plantsss)
    }catch(err){
       console.log(err)
       res.send("Something Went Wrong")
    }
 })
 
 
plantRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
     const plant= new PlantModel(payload)
     await plant.save()
     res.send("Created a cereal")
    }catch(err){
     console.log(err)
     res.send({"msg":"Something Went Wrong"})
    }
 })


 module.exports={
    plantRouter
 }
 