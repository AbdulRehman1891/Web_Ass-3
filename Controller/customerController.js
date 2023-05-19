const jwt = require("jsonwebtoken");
const tour=require("../Models/tourSchema")
const Booking=require("../Models/bookingSchema")
const Customer=require("../Models/customerSchema")
const Review=require("../Models/ReviewSchema")
const WishList=require("../Models/wishlistSchema")


const addcustomer = (req, res) => {
    const { customer_id, customer_name, customer_email, customer, customer_phone } = req.body;
  
    Customer.findOne({ customer_id: customer_id })
      .then(existingCustomer => {
        if (existingCustomer) {
          res.status(400).send({
            status: "FAILED",
            message: "Customer ID already exists. Please choose a different ID."
          });
        } else {
          const newTour = new Customer({ customer_id, customer_name, customer_email, customer, customer_phone });
          newTour.save()
            .then(() => res.status(200).send({
              status: "SUCCESS",
              message: "Customer added successfully."
            }))
            .catch(err => res.status(500).send({
              status: "FAILED",
              message: "Customer not added. Error: " + err.message
            }));
        }
      })
      .catch(err => res.status(500).send({
        status: "FAILED",
        message: "Error checking Customer ID. " + err.message
      }));
  };
  


const viewcustomer=async(req,res)=>{
    try {
    
      const tours = await Customer.find();
  
      res.send(tours);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
    
  }


  const deletecustomer = (req, res) => {
    const customer_id= req.body.customer_id;
  
    Customer.findOneAndDelete({ customer_id: customer_id })
      .then(deleteCustomer => {
        if (!deleteCustomer) {
          
          res.status(404).send({
            status: "FAILED",
            message: "Customer not found. Cannot delete non-existent tour."
          });
        } else {
          res.status(200).send({
            status: "SUCCESS",
            message: "Customer deleted successfully."
          });
        }
      })
      .catch(err => res.status(500).send({
        status: "FAILED",
        message: "Error deleting Customer. " + err.message
      }));
  };
  


const updatecustomer = (req, res) => {
    const { customer_id, customer_name, customer_email, customer_phone }  = req.body;
  
    Customer.findOne({ customer_id: customer_id })
      .then(existingCustomer => {
        if (!existingCustomer) {
          res.status(404).send({
            status: "FAILED",
            message: "Tour not found. Cannot update non-existent tour."
          });
        } else {
          existingCustomer.customer_name=customer_name;
          existingCustomer.customer_email=customer_email;
          existingCustomer.customer_phone=customer_phone;
  
          existingCustomer.save()
            .then(() => res.status(200).send({
              status: "SUCCESS",
              message: "Tour updated successfully."
            }))
            .catch(err => res.status(500).send({
              status: "FAILED",
              message: "Error updating tour. " + err.message
            }));
        }
      })
      .catch(err => res.status(500).send({
        status: "FAILED",
        message: "Error checking tour ID. " + err.message
      }));
  };
 
  

  const booking = async (req, res) => {
    try {
      const newBooking = await Booking.create(req.body);
      const tours = await tour.findOne({ tour_id: newBooking.tour_id });
  
      if (!tours) {
        res.status(404).json({ error: 'Tour not found' });
        return;
      }
  
      const customer = await Customer.findOne({ customer_id: req.body.customer_id });
  
      if (!customer) {
        res.status(404).json({ error: 'Customer not found' });
        return;
      }
      
      customer.bookings.push({
        booking_id: newBooking.booking_id,
        tour_name: tours.tour_name,
        departure_date: tours.departure_date,
        number_of_people: newBooking.numberOfpeople,
        total_price: newBooking.totalprice,
        booking_date: newBooking.booking_date
      });
  
      await customer.save();
  
      res.status(201).json({ message: 'Tour booked successfully', booking: newBooking });
    
    } catch (error) {
        console.log(error)
      res.status(400).json({ error: 'Failed to book the tour' });
    }
  };



  const addtour = (req, res) => {
    const { tour_id, tour_name, description, destination, price, departure_date, duration_days } = req.body;
  
    tour.findOne({ tour_id: tour_id })
      .then(existingTour => {
        if (existingTour) {
          res.status(400).send({
            status: "FAILED",
            message: "Tour ID already exists. Please choose a different ID."
          });
        } else {
          const newTour = new tour({ tour_id, tour_name, description, destination, price, departure_date, duration_days });
          newTour.save()
            .then(() => res.status(200).send({
              status: "SUCCESS",
              message: "Tour added successfully."
            }))
            .catch(err => res.status(500).send({
              status: "FAILED",
              message: "Tour not added. Error: " + err.message
            }));
        }
      })
      .catch(err => res.status(500).send({
        status: "FAILED",
        message: "Error checking tour ID. " + err.message
      }));
  };
  

const searchTour = (req, res) => {
    const { tour_id } = req.body;
  
    tour.findOne({ tour_id: tour_id })
      .then(foundTour => {
        if (!foundTour) {
          res.status(404).send({
            status: "FAILED",
            message: "Tour not found."
          });
        } else {
          res.status(200).send({
            status: "SUCCESS",
            message: "Tour found.",
            data: foundTour
          });
        }
      })
      .catch(err => res.status(500).send({
        status: "FAILED",
        message: "Error searching for tour. " + err.message
      }));
  };
  


const addtoCart=(req,res)=>{
    const{customer_id}=req.body;

    Customer.findOne({customer_id:customer_id})
    .then(found=>{
        if(!found)
        {
            res.status(200).send({
                status: "Failed",
                message: "Customer not found.",
                
              });
        }
        else{
            res.status(200).send({
                status: "SUCCESS",
                message: "Customer found.",
                data: found
              });
        }
    }).catch(err => res.status(500).send({
        status: "FAILED",
        message: "Error checking Customer ID. " + err.message
      }));

}


const addtoWishlist=(req,res)=>{
  const{wishlist_id}=req.body;

  WishList.findOne({wishlist_id:wishlist_id})
  .then(found=>{
      if(!found)
      {
          res.status(200).send({
              status: "Failed",
              message: "Wishlist Item not found.",
              
            });
      }
      else{
          res.status(200).send({
              status: "SUCCESS",
              message: "Wishlist Item found.",
              data: found
            });
      }
  }).catch(err => res.status(500).send({
      status: "FAILED",
      message: "Error checking Wishlist ID. " + err.message
    }));

}


const ViewReview=(req,res)=>{
  const{review_id}=req.body;

  Review.findOne({review_id:review_id})
  .then(found=>{
      if(!found)
      {
          res.status(200).send({
              status: "Failed",
              message: "Review not found.",
              
            });
      }
      else{
          res.status(200).send({
              status: "SUCCESS",
              message: "Review found.",
              data: found
            });
      }
  }).catch(err => res.status(500).send({
      status: "FAILED",
      message: "Error checking Review ID. " + err.message
    }));

}


const giveReview = (req, res) => {
  const { tour_id, customer_id, review_id, review} = req.body;

  Review.findOne({ review_id: review_id })
    .then(existingTour => {
      if (existingTour) {
        res.status(400).send({
          status: "FAILED",
          message: "Review ID already exists. Please choose a different ID."
        });
      } else {
        const newReview = new Review({ tour_id, customer_id, review_id, review });
        newReview.save()
          .then(() => res.status(200).send({
            status: "SUCCESS",
            message: "Review added successfully."
          }))
          .catch(err => res.status(500).send({
            status: "FAILED",
            message: "Review not added. Error: " + err.message
          }));
      }
    })
    .catch(err => res.status(500).send({
      status: "FAILED",
      message: "Error checking Review ID. " + err.message
    }));
};

const addPayment = async (req, res) => {
  try {
    const { booking_id,customer_id, amount, payment_method, transaction_id, status } = req.body;

    // Create a new payment object
    const payment = new Payment({
      booking_id,
      customer_id,
      amount,
      payment_method,
      transaction_id,
      status
    });

    // Save the payment to the database
    const savedPayment = await payment.save();

    const booking = await Booking.findOne({ booking_id: req.body.booking_id });

    if (!booking) {
      res.status(404).json({ error: 'Booking not found' });
      return;
    }
    const cust = await Customer.findOne({ customer_id: req.body.customer_id });

    if (!cust) {
      res.status(404).json({ error: 'Customer not found' });
      return;
    }

    await Booking.updateOne({ booking_id: booking_id }, { $set: { paymentstatus: 'paid' } });


    res.status(201).json({ message: 'Payment added successfully', payment: savedPayment });
    await sendPaymentConfirmationEmail(cust.customer_email, payment);
  } catch (error) {
    console.error('Error adding payment:', error);
    res.status(500).json({ error: 'Failed to add payment' });
  }
};


module.exports={
    addcustomer,
    updatecustomer,
    giveReview,
    deletecustomer,
    addPayment,
    ViewReview,
    viewcustomer,
    booking,
    addtour,
    addtoWishlist,
    searchTour,
    addtoCart
}




