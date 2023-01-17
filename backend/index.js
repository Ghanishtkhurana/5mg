const express=require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { fullBodyCheckRouter } = require("./routes/FullBodyCheck.route")
const { comboDealsRouter } = require("./routes/ComboDeals.route")
require('dotenv').config()


const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Home Page")
}) 

app.use("/fullBodyCheck",fullBodyCheckRouter)
app.use("/comboDeals",comboDealsRouter)


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