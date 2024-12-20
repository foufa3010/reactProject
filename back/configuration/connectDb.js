const dotenv=require("dotenv");
dotenv.config();
const url=process.env.URL;

const mongoose=require("mongoose");
const connectDb=async()=>{
    try{
        await mongoose.connect(url);
        console.log("connected to mongoDB Atlas successfuly.");
    }catch(error){
        console.log("connected to mongoDb Atlas failed: " , error);
    }
};
module.exports=connectDb;