const mongoose=require("mongoose")

const cerealSchema=mongoose.Schema({
    title: String,
    description: String,
    image: String,
    rating: Number,
    price:Number
})

const CerealModel = mongoose.model("cereal",cerealSchema);

module.exports={
    CerealModel
}