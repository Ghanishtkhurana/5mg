const express=require("express")
const {TrendingModel}=require("../models/Trending.model")
const trendingRouter = express.Router()


trendingRouter.get("/",async(req,res)=>{
    try{
       const trending= await TrendingModel.find()
       res.send(trending)
    }catch(err){
       console.log(err)
       res.send("Something Went Wrong")
    }
 })
 
 
trendingRouter.post("/create",async(req,res)=>{
    const payload=req.body
    try{
     const trend= new TrendingModel(payload)
     await trend.save()
     res.send("Created a trending product")
    }catch(err){
     console.log(err)
     res.send({"msg":"Something Went Wrong"})
    }
 })


 module.exports={
    trendingRouter
 }
 