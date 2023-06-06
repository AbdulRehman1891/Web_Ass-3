const mongoose=require ("mongoose")


const cartSchema=mongoose.Schema({

      tour_id: {
        type: Number,
        required: true
      },

      customer_id:{
        type: Number,
        required: true
      }
     

},
{timestamps:true}
)


module.exports=mongoose.model("Cart",cartSchema)