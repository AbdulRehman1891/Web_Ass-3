const customerRouter=require("express").Router();
const jwt=require("jsonwebtoken");
const {verifyUserLoggedIn,checkEmploye} = require("../authenticate");
const { addcustomer, viewcustomer, deletecustomer,addPayment,ViewReview,giveReview, updatecustomer, booking,addtoWishlist, addtour, searchTour, addtoCart } = require("../Controller/customerController");



//  Registration
customerRouter.post("/addcustomer",verifyUserLoggedIn,addcustomer)
customerRouter.get("/viewcustomer",verifyUserLoggedIn,viewcustomer)
customerRouter.patch("/updatecustomer",verifyUserLoggedIn,updatecustomer)
customerRouter.delete("/deletecustomer",verifyUserLoggedIn,deletecustomer)



// Review
customerRouter.get("/viewreview",ViewReview)
customerRouter.post("/givereview",giveReview)


// Tour Booking
customerRouter.post("/addtour",addtour)
customerRouter.post("/addcart",addtoCart)
customerRouter.post("/addwish",addtoWishlist)
customerRouter.post("/bookings",booking)
customerRouter.get("/searchtour",searchTour)
customerRouter.post("/makepayment",verifyUserLoggedIn,addPayment)



module.exports=customerRouter