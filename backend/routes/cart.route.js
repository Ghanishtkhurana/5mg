const express = require("express")
const { authantication } = require("../middlewares/auth.middleware")
const Cart = require("../models/cart.model")
const app = express.Router()

app.use(authantication)

app.get("/",async(req,res)=>{
    try{    
        const userId = req.body.userID
        const cart = await Cart.find({userID : userId})
        res.send(cart)
    }catch(e){
        res.send(e.message)
    }
})
app.post("/",async(req,res)=>{
    try{    
        const userId = req.body.userID
        const cart = await Cart.create({...req.body})
        res.send(cart)
    }catch(e){
        res.send(e.message)
    }
})

app.delete("/:id",async(req,res)=>{
    try{
        const id = req.params.id
        console.log(id)
        console.log("userId=>",id)
        const cart = await Cart.findByIdAndDelete({_id:id})
        res.send("item is removed")
    }catch(e){
        res.send(e.message)
    }
})
app.delete("/checkout/:id",async(req,res)=>{
    try{
        const id = req.params.id
        console.log(id)
        console.log("userId=>",id)
        const cart = await Cart.deleteMany({userID : id})
        res.send("your order is placed")
    }catch(e){
        res.send(e.message)
    }
})

module.exports = app