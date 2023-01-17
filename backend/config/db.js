const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://vivek:bhatt@cluster0.0ieu1r3.mongodb.net/constructweekdata?retryWrites=true&w=majority")

module.exports={
    connection
}
