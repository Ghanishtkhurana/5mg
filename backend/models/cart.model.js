const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema({
    title: {type : String , required : true},
    description: {type : String , required : true},
    image: {type : String , required : true},
    rating: {type : Number , required : true},
    price: {type : Number , required : true},
    quantity: {type : Number , required : true,default:1,min:1},
    userID: {type : String , required : true},
});

const Cart = mongoose.model("cart",cartSchema)

module.exports = Cart