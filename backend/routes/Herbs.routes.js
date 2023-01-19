const express = require("express")
const { HerbModel } = require("../Models/Herbs.model")


const HerbsRoute = express.Router()

HerbsRoute.post("/addherbs",async(req,res)=>{
    const payload = req.body
    
    try{
const herbs = new HerbModel(payload)
await herbs.save()
res.send("added new entry in herbs")
    }catch(err){
        console.log(err)
        console.log({"err":"Err while posting data"})
    }

})

module.exports={
    HerbsRoute
}