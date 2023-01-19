const mongoose = require("mongoose")

const SkinSchema = mongoose.Schema({
name:String,
herbImage:String,
smalldes:String,
largedes:String
})

const SkincareModel = mongoose.model("Skindata",SkinSchema)

module.exports={
    SkincareModel
}