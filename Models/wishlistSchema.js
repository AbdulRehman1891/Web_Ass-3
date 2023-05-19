const mongoose=require ("mongoose")

const wishlistSchema=mongoose.Schema({

      tour_id: {
        type: Number,
        required: true
      },
      customer_id:{
        type: Number,
        required: true
      },
      wishlist_id:{
        type: Number,
        required: true
      }
},
{timestamps:true}
)


module.exports=mongoose.model("WishList",wishlistSchema)