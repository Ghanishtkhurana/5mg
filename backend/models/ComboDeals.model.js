const mongoose=require("mongoose")

const comboDealSchema=mongoose.Schema({
    title: String,
    offers: String,
    image: String,
    rating: Number,
    price:Number
})

const ComboDealsModel = mongoose.model("combodeals",comboDealSchema);

module.exports={
    ComboDealsModel
}