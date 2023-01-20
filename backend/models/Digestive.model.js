const mongoose = require("mongoose")

const DigestSchema = mongoose.Schema({
name:String,
herbImage:String,
smalldes:String,
largedes:String
})

const DigestModel = mongoose.model("Digestdata",DigestSchema)

module.exports={
    DigestModel
}