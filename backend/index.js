const express=require ("express");
const uRoutes = require("./Routes/userRoutes");
const cRoutes = require("./Routes/customerRoutes");
require("dotenv").config();
const app=express();


app.use(express.json())
const mongoose = require("mongoose"); 
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("Connected")
}).catch(err=>{
   console.log(err) 
}) 

app.use("/user",uRoutes); 
app.use("/customer",cRoutes); 

app.listen(process.env.PORT || 3000,()=>{
    console.log(`App listening on port ${process.env.PORT}`)
})


