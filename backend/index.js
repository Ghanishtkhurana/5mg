const { authantication } = require("./middlewares/auth.middleware");
const { userrouter } = require("./routes/user.router");
const express=require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { fullBodyCheckRouter } = require("./routes/FullBodyCheck.route")
const { comboDealsRouter } = require("./routes/ComboDeals.route")
const { trendingRouter } = require("./routes/Trending.route")
const { cerealRouter } = require("./routes/Cereal.route")
const { plantRouter } = require("./routes/PlantBases.route")

const {AyurvedaRoute} = require("./routes/Ayurved.routes")
const {SkinRoute} =require("./routes/Skin.routes")
const {DigestRoute} =require("./routes/Digestivecare.routes")
const {HairRoute} =require("./routes/Hair.routes")
const {HerbsRoute} =require("./routes/Herbs.routes")

require('dotenv').config()


const app = express();
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});




app.use("/users", userrouter);
// app.use(authantication);

app.use("/fullBodyCheck", fullBodyCheckRouter);
app.use("/fullBodyCheck",fullBodyCheckRouter)
app.use("/comboDeals",comboDealsRouter)
app.use("/trending",trendingRouter)
app.use("/cereal",cerealRouter)
app.use("/plant",plantRouter)


// ayurveda page-----
app.use("/herbs", HerbsRoute);
app.use("/skin", SkinRoute);
app.use("/digest", DigestRoute);
app.use("/hairs", HairRoute);
app.use("/ayurveda", AyurvedaRoute);
// ayurveda page-----


app.listen(4001,async()=>{
    try{
        await connection
        console.log("Connected to database")
    }catch(err){
        console.log("Problem connecting")
        console.log(err)
    }
    console.log("Port running")
})


