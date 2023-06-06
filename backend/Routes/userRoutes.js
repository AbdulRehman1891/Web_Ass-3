const {signup, login,viewcustomer}=require("../Controller/userController");
const userRouter=require("express").Router();
const {verifyUserLoggedIn,checkEmploye} = require("../authenticate");
const jwt=require("jsonwebtoken");


userRouter.post('/signup',signup)
userRouter.post('/login',login)
userRouter.get("/viewcustomer/:username",viewcustomer)
// userRouter.patch("/updatecustomer",verifyUserLoggedIn,updatecustomer)
// customerRouter.delete("/deletecustomer",verifyUserLoggedIn,deletecustomer)

module.exports=userRouter;