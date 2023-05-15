const mongoose=require ("mongoose")


const customerSchema=mongoose.Schema({
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
      bookings: [{
        booking_id: Number,
        tour_name: String,
        departure_date: Date,
        number_of_people: Number,
        total_price: Number,
        booking_date: Date
        }],

},
{timestamps:true}
)


module.exports=mongoose.model("customers",customerSchema)