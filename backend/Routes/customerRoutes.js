const customerRouter=require("express").Router();
const jwt=require("jsonwebtoken");
const {verifyUserLoggedIn,checkEmploye} = require("../authenticate");
const { addcustomer, viewcustomer,getTour,deletecustomer,addPayment,ViewReview,giveReview, updatecustomer, booking,addtoWishlist, addtour, searchTour, addtoCart } = require("../Controller/customerController");



customerRouter.post("/addcustomer",addcustomer)
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
customerRouter.get("/gettour",getTour)
customerRouter.post("/makepayment",addPayment)



module.exports=customerRouter