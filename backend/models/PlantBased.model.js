const mongoose=require("mongoose")

const plantSchema=mongoose.Schema({
    title: String,
    description: String,
    image: String,
    rating: Number,
    price:Number
})

const PlantModel = mongoose.model("plantbased",plantSchema);

module.exports={
    PlantModel
}