
const User=require("../Models/userModel")
const jwt=require("jsonwebtoken");
const signup= (req,res)=>{
    console.log(req.body)
   let {name,username,password,email}=req.body;
   let user=new User({
    name,
    username,
    password,
    email
   })
   user.save().then((user)=>{
    {
        res.status(200).json({ message: "User Successfully Created", user: user });
    }
   }).catch(err=>{
    res.status(400).json({ err: err, message: "User Not Created" });
   })
}


const login=(req,res)=>{
    let {username,password}=req.body;
    User.findOne({username:username}).then(founduser=>{
        if(!founduser)
        {
            res.status(400).send({ "Message": "User Not Found" });
        }
        else{
            if(password=founduser.password)
            {
                let token=jwt.sign({
                    id:founduser._id,
                    role:founduser.role,
                },process.env.SECRET_KEY,{
                    expiresIn:'24h'
                })
                res.status(200).send({user:founduser,token:token})
            }
            else{
                res.status(400).send({ "Message": "Password not Match" });
            }
        }
    }).catch(e=>{
        res.status(500).send({e:e})
    })
}

const viewcustomer=async(req,res)=>{
    try {
        const { username } = req.params;
        const customer = await User.findOne({ username });
      res.send(customer);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
    
  }


module.exports={
    signup,
    login,
    viewcustomer
}