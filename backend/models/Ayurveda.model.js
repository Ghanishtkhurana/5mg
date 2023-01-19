const mongoose = require("mongoose")

const AyurvedaSchema = mongoose.Schema({
name:String,
herbImage:String,
smalldes:String,
largedes:String
})

const AyurvedaModel = mongoose.model("Ayurvedadata",AyurvedaSchema)

module.exports={
    AyurvedaModel
}