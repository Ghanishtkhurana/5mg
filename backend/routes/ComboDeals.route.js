const express=require("express")
const {ComboDealsModel}=require("../models/ComboDeals.model")
const comboDealsRouter = express.Router()


comboDealsRouter.get("/",async(req,res)=>{
    try{
       const combodeals= await ComboDealsModel.find()
       res.send(combodeals)
    }catch(err){
       console.log(err)
       res.send("Something Went Wrong")
    }
 })
 comboDealsRouter.get("/:id",async(req,res)=>{
    try{
      const {id}=req.params
      const combodeals= await ComboDealsModel.findOne({_id:id})
      res.send(combodeals)
   }catch(err){
      console.log(err)
      res.send("Something Went Wrong")
   }
})
 
 
 comboDealsRouter.get("/low",async(req,res)=>{
   try{
      const cerealss= await ComboDealsModel.find({price:{$lte:550}})
      res.send(cerealss)
   }catch(err){
      console.log(err)
      res.send("Something Went Wrong")
   }
})
 
comboDealsRouter.get("/high",async(req,res)=>{
   try{
      const cerealss= await ComboDealsModel.find({price:{$gte:550}})
      res.send(cerealss)
   }catch(err){
      console.log(err)
      res.send("Something Went Wrong")
   }
})




comboDealsRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
     const note= new ComboDealsModel(payload)
     await note.save()
     res.send("Created a deal")
    }catch(err){
     console.log(err)
     res.send({"msg":"Something Went Wrong"})
    }
 })


 module.exports={
    comboDealsRouter
 }
 