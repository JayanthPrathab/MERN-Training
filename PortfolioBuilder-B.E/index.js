const express = require("express");
const dotenv = require("dotenv");
const mdb = require("mongoose");
const bcrypt=require('bcrypt');
const cors=require('cors');
const Signup = require("./Models/signupSchema");
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())
const PORT = 3001;

// console.log(process.env.MONGODB_URL);
const MONGODB_URL=process.env.MONGODB_URL
mdb
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connection sucessfull");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/", (req, res) => {
    console.log("first")
  res.send("<h1>BackEnd Server Active</h1>");
});

app.post("/signup", async(req, res) => {
  try {
    const {firstName,lastName,email,password,mobile} = req.body
    const hashedpassword= await bcrypt.hash(password, 10);
    const newSignup = new Signup({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: hashedpassword,
      mobile: mobile,
    })
    newSignup.save();
    console.log("Signup successful");
    res.status(201).json({ message: "Signup Successful", isSignup: true });
  } catch (err) {
    console.log(err);
    res.status(201).json({ message: "Signup unsuccessful", isSignup: false });
  }
});

app.get('/getsignupdetails',(req,res)=>{
  const signup = Signup.find();
  res.send("signup details fetched");
})

app.post('/login',async(req,res)=>{
  console.log("welcome to login");
  try{
    const {email,password}=req.body;
    const existingUser=await Signup.findOne({email :email});
    console.log(existingUser);
    if(existingUser){
      const isValidpass= await bcrypt.compare(password,existingUser.password);
      console.log(isValidpass)
      if(isValidpass){
        console.log(req.body);
        res.status(201).json({message:"Login successful", isLogin:true})
      }
      else{
        res.status(201).json({message:"Invalid Password", isLogin:false});
      }
    }
    else{
      res.status(201).json({message:"User not found!! Signup !!", isLogin:false})
    }
  }
  catch(error){
    console.log("User not found!!! Signup First!!!")
    res.status(201).json({message:"Login error", isLogin:false})
  }
})

app.listen(PORT, () => {
  console.log("Server started successfully");
});
