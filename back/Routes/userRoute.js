const express=require("express");
const UserRoute=express.Router();
const bcrypt = require('bcrypt');


const {
    getUsers,
    deleteUserByEmail,
    UserSignUp,
    UserSignIn,
    PostFeedBack,
    updateUserProfile,
    getUserProfile,
    getAllFeedbacks,
}=require("../Controllers/userController");
const isAuth=require('../middleware/isAuth');//ensure the user is authenticated
//const isAutho =require('../middleware/isAutho');

UserRoute.get("/users", getUsers);
UserRoute.delete("/users/:email",deleteUserByEmail);
UserRoute.post("/signin", UserSignIn);
UserRoute.post("/signup", UserSignUp);
UserRoute.post('/feedback',PostFeedBack);
UserRoute.get("/feedbacks",getAllFeedbacks)
// GET user profile (protected)
UserRoute.get('/profile', isAuth, getUserProfile);

// PUT update user profile (protected)
UserRoute.put('/profile', isAuth, updateUserProfile);
module.exports=UserRoute;