const mongoose=require ("mongoose")


const bookingSchema=mongoose.Schema({
      booking_id: {
        type: Number,
        required: true
      },
      tour_id: {
        type: Number,
        required: true
      },
      customer_id: {
        type: Number,
        required: true
      },
      customer_name: {
        type: String,
        required: true
      },
      customer_email: {
        type: String,
        required: true
      },
      customer_phone: {
        type: String,
        required: true
      },
      numberOfpeople: {
        type: Number,
        required: true
      },
      totalprice: {
        type: Number,
        required: true
      },
      paymentstatus: {
        type: String,
        default:"Pending"
      },
      booking_date:
      {
        type: Date,
        required: true
      }

},
{timestamps:true}
)


module.exports=mongoose.model("bookings",bookingSchema)