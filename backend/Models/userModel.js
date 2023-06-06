const mongoose=require ("mongoose")


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
        max:30,
        min:3
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        default:"admin"
    },
},
{timestamps:true}
)


module.exports=mongoose.model("User",userSchema)