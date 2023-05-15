const {signup, login}=require("../Controller/userController");
const userRouter=require("express").Router();
const jwt=require("jsonwebtoken");





userRouter.get('/signup',signup)
userRouter.post('/login',login)

  
   




module.exports=userRouter;