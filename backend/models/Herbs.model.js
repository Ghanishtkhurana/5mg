const mongoose = require("mongoose")

const HerbsSchema = mongoose.Schema({
name:String,
herbImage:String,
smalldes:String,
largedes:String
})

const HerbModel = mongoose.model("Herbsdata",HerbsSchema)

module.exports={
    HerbModel
}