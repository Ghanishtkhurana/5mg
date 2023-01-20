const mongoose=require("mongoose")
mongoose.set('strictQuery', false)
const connection=mongoose.connect("mongodb+srv://vivek:bhatt@cluster0.0ieu1r3.mongodb.net/constructweekdata?retryWrites=true&w=majority")

module.exports={
    connection
}
