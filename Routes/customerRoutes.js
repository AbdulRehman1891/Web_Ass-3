const customerRouter=require("express").Router();
const jwt=require("jsonwebtoken");
const {verifyUserLoggedIn,checkEmploye} = require("../authenticate");
const { addcustomer, viewcustomer, deletecustomer, updatecustomer, booking, addtour, searchTour, addtoCart } = require("../Controller/customerController");




customerRouter.post("/addcustomer",verifyUserLoggedIn,addcustomer)
customerRouter.get("/viewcustomer",verifyUserLoggedIn,viewcustomer)
customerRouter.post("/updatecustomer",verifyUserLoggedIn,updatecustomer)
customerRouter.post("/deletecustomer",verifyUserLoggedIn,deletecustomer)

customerRouter.post("/addtour",addtour)
customerRouter.post("/addcart",addtoCart)
customerRouter.post("/bookings",booking)
customerRouter.get("/searchtour",searchTour)
// tourRouter.post("/customers",customers)


// tourRouter.post("/addpayment",addPayment)
// tourRouter.get("/payments",viewPayments)


module.exports=customerRouter