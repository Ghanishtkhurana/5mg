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
 