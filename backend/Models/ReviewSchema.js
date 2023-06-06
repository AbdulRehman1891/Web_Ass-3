const mongoose=require ("mongoose")


const reviewSchema=mongoose.Schema({

      tour_id: {
        type: Number,
        required: true
      },
      customer_id:{
        type: Number,
        required: true
      },
      review_id:{
        type: Number,
        required:true
      },
      review:{
        type: Number,
        required:true
      }
},
{timestamps:true}
)


module.exports=mongoose.model("Review",reviewSchema)