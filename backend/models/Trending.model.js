const mongoose=require("mongoose")

const trendingSchema=mongoose.Schema({
    title: String,
    description: String,
    image: String,
    rating: Number,
    price:Number
})

const TrendingModel = mongoose.model("trending",trendingSchema);

module.exports={
    TrendingModel
}