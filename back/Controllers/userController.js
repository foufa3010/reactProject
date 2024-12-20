const User = require('../models/User'); 
const Feedback =require('../models/Feedback');
const jwt=require("jsonwebtoken");
require('dotenv').config();

/* CRUD operations for the admin */

const getUsers=async(req,res)=>{
    try{
        const users=await User.find();
        if(users){
            res.status(200).json({users: users});
        }else{
            res.status(404).json({msg:"no users found"});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({msg: "error on getting users"});
    }
};

const deleteUserByEmail = async (req, res) => {
  const { email } = req.params;  
  try {
      const user = await User.findOneAndDelete({ email: email }); 
      if (user) {
          res.status(200).json({ msg: "User deleted successfully!" });
      } else {
          res.status(404).json({ msg: "User not found" });
      }
  } catch (error) {
      res.status(500).json({ msg: "Error on deleting user" });
  }
};


/* CRUD operations for the registered and unregistered users */
/* create a user*/
const UserSignUp=async(req,res)=>{
    const user=req.body;
    try{
      
        const foundUser=await User.findOne({email: user.email});
        if(foundUser){
                res.status(400).json({msg:"user already exists"});
        }else{
                
                const newUser=new User(user);
                await newUser.save();
                res.status(200).json({user: newUser, msg: 'user successfully added'});
        }
    }catch(error){
        res.status(500).json({msg:"error on registring user", error});
    }
};
/* read user*/
const UserSignIn = async (req,res)=>{
  const user=req.body;
  try{
    const foundUser=await User.findOne({email: user.email});

    if(foundUser){
      if(user.password === foundUser.password){
        const token=jwt.sign(
          {id: foundUser._id, role: foundUser.role},
          process.env.JWT_SECRET
        );
        res.status(200).json({user: foundUser, token: token});
      }else{
        res.status(400).json({msg:"Wrong password"});
      }
    }else{
      return res.status(400).json({msg: "User not registered"});
    }
  }catch(error){
    console.error(error);
    res.status(500).json({msg:"server error"});
  }
}
/* post feedback */
const PostFeedBack=async(req,res)=>{
  try{
  const {name, email,message}=req.body;
  const newFeed=new Feedback({name,email,message});
  await newFeed.save();
  res.status(201).json({msg:"Feedback submitted successfully"})
  }catch(error){
    res.status(500).json({msg:"Error submitting feedback"})
  }
};

// get feedbacks
const getAllFeedbacks = async (req, res) => {
  try {
      // Assuming the admin is authenticated, fetch all feedbacks from the database
      const feedbacks = await Feedback.find().sort({ timestamp: -1 });  // Sort by timestamp descending
      
      res.status(200).json({
          success: true,
          data: feedbacks,
      });
  } catch (error) {
      console.error("Error retrieving feedbacks:", error);
      res.status(500).json({
          success: false,
          message: 'Server error while retrieving feedbacks',
      });
  }
};
// Fetch user profile
const getUserProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Get the user ID from the decoded JWT token
    const user = await User.findById(userId).select('-password'); // Exclude password from the response
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.status(200).json(user); // Send back user data
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Server error while fetching user profile' });
  }
};

//update user profile
const updateUserProfile=async (req,res)=>{
  try{
    const {name,email,password}=req.body;
    const userId=req.user.id;// from JWT token
    //find the user and upadate their information

    const updatedUser=await User.findByIdAndUpdate(
      userId,
      {name,email,password},
      {new:true}
    );

    res.status(200).json({user: updatedUser});

  }catch(error){
    res.status(500).json({msg: "error updating profile", error});
  }
};

module.exports={getUsers, deleteUserByEmail,UserSignUp,UserSignIn, PostFeedBack,updateUserProfile,getUserProfile,getAllFeedbacks};
