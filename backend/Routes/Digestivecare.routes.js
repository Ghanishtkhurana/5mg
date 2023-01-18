const express = require("express")
const { DigestModel } = require("../Models/Digestive.model")



const DigestRoute = express.Router()

DigestRoute.post("/adddigest",async(req,res)=>{
    const payload = req.body
    
    try{
const herbs = new DigestModel(payload)
await herbs.save()
res.send("added new entry in herbs")
    }catch(err){
        console.log(err)
        console.log({"err":"Err while posting data"})
    }

})

module.exports={
   DigestRoute
}