var mongoose =require("mongoose");
const Schema=mongoose.Schema;

const feedbackSchema=new Schema({

    name:{
        type:String,
        required: true,
    },

    email:{
        type: String,
        required:false,//optional
    },

    message:{
        type: String,
        required:true,
    },
    timestamp: {
        type: Date,
        default: Date.now, 
        }
        
    });


const Feedback=mongoose.model('Feedback', feedbackSchema);
module.exports=Feedback;