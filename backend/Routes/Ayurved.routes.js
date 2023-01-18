const express = require("express")
const { AyurvedaModel } = require("../Models/Ayurveda.model")




const AyurvedaRoute = express.Router()

AyurvedaRoute.post("/addayur",async(req,res)=>{
    const payload = req.body
    
    try{
const ayur = new AyurvedaModel(payload)
await ayur.save()
res.send("added new entry in herbs")
    }catch(err){
        console.log(err)
        console.log({"err":"Err while posting data"})
    }

})

module.exports={
    AyurvedaRoute
}