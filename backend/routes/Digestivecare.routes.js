const express = require("express")
const { DigestModel } = require("../Models/Digestive.model")



const DigestRoute = express.Router()

DigestRoute.get("/",async(req,res)=>{
    try{
    const product = await DigestModel.find()
    res.send(product)
    }catch(err){
    console.log(err)
    console.log({"err":"Err while getting herbs data"})
    }
    })

    DigestRoute.get("/:id",async(req,res)=>{
        const id = req.params.id
        try{
        const product = await DigestModel.findOne({"_id":id})
        res.send(product)
        }catch(err){
        console.log(err)
        console.log({"err":"Err while getting herbs data"})
        }
        })

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