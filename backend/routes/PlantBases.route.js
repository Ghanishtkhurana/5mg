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

 plantRouter.get("/:id",async(req,res)=>{
   try{
     const {id}=req.params
     const cereals= await PlantModel.findOne({_id:id})
     res.send(cereals)
  }catch(err){
     console.log(err)
     res.send("Something Went Wrong")
  }
})
 
 plantRouter.get("/low",async(req,res)=>{
   try{
      const cerealss= await PlantModel.find({price: {$lte : 550} })
      res.send(cerealss)
   }catch(err){
      console.log(err)
      res.send("Something Went Wrong")
   }
})
 
plantRouter.get("/high",async(req,res)=>{
   try{
      const cerealss= await PlantModel.find({price:{$gte:550}})
      res.send(cerealss)
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
     res.send("Created a plant based product")
    }catch(err){
     console.log(err)
     res.send({"msg":"Something Went Wrong"})
    }
 })


 module.exports={
    plantRouter
 }
 