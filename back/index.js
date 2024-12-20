const express =require("express");
const UserRoute=require("./Routes/UserRoute");
const connectDb=require("./Configuration/connectDb");
var cors = require('cors')

const app=express();

const dotenv=require("dotenv");
dotenv.config();

const port=process.env.PORT;
connectDb();
app.use(cors())
app.listen(port,(error)=>{
    if(error){
        console.log("server failed");
    }else{
        console.log(`server started on port ${port}`)
    }
});
app.use(express.json());
app.use("/api", UserRoute);
