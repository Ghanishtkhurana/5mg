const mongoose=require("mongoose")

const fullbodycheckSchema=mongoose.Schema({
    title: String,
    no_of_tests: String,
    image: String,
    rating: Number,
    price:Number
})

const FullBodyCheckModel = mongoose.model("fullbodycheck",fullbodycheckSchema);

module.exports={
    FullBodyCheckModel
}