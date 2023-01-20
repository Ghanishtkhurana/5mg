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
 
 trendingRouter.get("/low",async(req,res)=>{
   try{
      const cerealss= await TrendingModel.find({price:{$lte:550}})
      res.send(cerealss)
   }catch(err){
      console.log(err)
      res.send("Something Went Wrong")
   }
})
 
trendingRouter.get("/:id",async(req,res)=>{
   try{
     const {id}=req.params
     const cereals= await TrendingModel.findOne({_id:id})
     res.send(cereals)
  }catch(err){
     console.log(err)
     res.send("Something Went Wrong")
  }
})

trendingRouter.get("/high",async(req,res)=>{
   try{
      const cerealss= await TrendingModel.find({price:{$gte:550}})
      res.send(cerealss)
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
 