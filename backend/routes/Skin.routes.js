const express = require("express")
const { SkincareModel } = require("../Models/Skincare.model")



const SkinRoute = express.Router()


SkinRoute.get("/",async(req,res)=>{
    try{
    const product = await SkincareModel.find()
    res.send(product)
    }catch(err){
    console.log(err)
    console.log({"err":"Err while getting herbs data"})
    }
    })

    SkinRoute.get("/:id",async(req,res)=>{
        const id = req.params.id
        try{
        const product = await SkincareModel.findOne({"_id":id})
        res.send(product)
        }catch(err){
        console.log(err)
        console.log({"err":"Err while getting herbs data"})
        }
        })


SkinRoute.post("/addskin",async(req,res)=>{
    const payload = req.body
    
    try{
const skin = new SkincareModel(payload)
await skin.save()
res.send("added new entry in herbs")
    }catch(err){
        console.log(err)
        console.log({"err":"Err while posting data"})
    }

})

module.exports={
    SkinRoute
}