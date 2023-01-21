const express = require("express")
const { AyurvedaModel } = require("../Models/Ayurveda.model")




const AyurvedaRoute = express.Router()


AyurvedaRoute.get("/",async(req,res)=>{
    try{
    const product = await AyurvedaModel.find()
    res.send(product)
    }catch(err){
    console.log(err)
    console.log({"err":"Err while getting herbs data"})
    }
    })

    AyurvedaRoute.get("/:id",async(req,res)=>{
        const id = req.params.id
        try{
        const product = await AyurvedaModel.findOne({"_id":id})
        res.send(product)
        }catch(err){
        console.log(err)
        console.log({"err":"Err while getting herbs data"})
        }
        })

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