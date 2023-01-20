const express = require("express")
const { HerbModel } = require("../Models/Herbs.model")


const HerbsRoute = express.Router()




HerbsRoute.get("/allherbs",async(req,res)=>{
try{
const product = await HerbModel.find()
res.send(product)
}catch(err){
console.log(err)
console.log({"err":"Err while getting herbs data"})
}
})



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