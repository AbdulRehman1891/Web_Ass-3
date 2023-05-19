const mongoose=require ("mongoose")


const paymentSchema = mongoose.Schema({
  
    booking_id: {
        type: Number,
        required: true
    },
    customer_id:{
        type: Number,
        required: true
    },
    amount: {
      type: Number,
      required: true
    },
    payment_method: {
      type: String,
      required: true
    },
    transaction_id: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  {timestamps:true}
  )

  
  
  module.exports=mongoose.model("payments",paymentSchema);
  