const mongoose = require("mongoose")

const HairSchema = mongoose.Schema({
name:String,
herbImage:String,
smalldes:String,
largedes:String
})

const HairModel = mongoose.model("Hairsdata",HairSchema)

module.exports={
    HairModel
}