const express = require("express")
const { HairModel } = require("../Models/Haircare.mdel")



const HairRoute = express.Router()

HairRoute.post("/addhairs",async(req,res)=>{
    const payload = req.body
    
    try{
const hairs = new HairModel(payload)
await hairs.save()
res.send("added new entry in herbs")
    }catch(err){
        console.log(err)
        console.log({"err":"Err while posting data"})
    }

})

module.exports={
  HairRoute
}