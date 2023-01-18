const express=require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { HerbsRoute } = require("./Routes/Herbs.routes")
const { SkinRoute } = require("./Routes/Skin.routes")
const { DigestRoute } = require("./Routes/Digestivecare.routes")
const { HairRoute } = require("./Routes/Hair.routes")
const { AyurvedaRoute } = require("./Routes/Ayurved.routes")
require('dotenv').config()


const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
}) 
// ayurveda page-----
app.use("/herbs",HerbsRoute)
app.use("/skin",SkinRoute)
app.use("/digest",DigestRoute)
app.use("/hairs",HairRoute)
app.use("/ayurveda",AyurvedaRoute)
// ayurveda page-----


app.listen(4001,async()=>{
    try{
        await connection
        console.log("Connected to database")
    }catch(err){
        console.log("Problem connecting")
        console.log(err)
    }
    console.log("Port running")
})