
var mongoose =require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
   

    name:{
        type:String,
        required: true,
    },

    email:{
        type: String,
        required:true,
    },

    password:{
        type: String,
        required:true,
    },
    role: {
        type: String,
        enum:['user', 'admin'],
        default: 'user' // Default role
        }
        },
        

);


const User=mongoose.model('User', userSchema);
module.exports=User;