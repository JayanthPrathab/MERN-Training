const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bcrypt= require('bcrypt');
const cors= require('cors')
const Signup= require('./Models/signupSchema');
dotenv.config();

const app = express();
const corsptions={
  origin:'https://portfolio-builder-woad.vercel.app/',
  methods:['GET','POST','PUT'],
  credentials:true
}
app.use(cors(corsptions));
app.use(express.json());
const port = 3001;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => {
    console.log("Connection falied", err);
  });
  
  app.get("/", (req, res) => {
    console.log("first")
  res.send("<h1>BackEnd Server Active</h1>");
});

  app.post('/signup',async(req,res)=>{
    try{
        const {firstName,lastName,email,password,mobile}=req.body;
        const hashedpassword= await bcrypt.hash(password,10);
        const newSignup=new Signup({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashedpassword,
            mobile:mobile
        })
        newSignup.save();
        console.log("Signup Successful");
        res.status(201).json({message:"Signup Successful", isSignup:true})
    }
    catch(err){
        console.log(err);
        res.status(201).json({message:"User already exists!!! Log IN !!!", isSignup:false})
    }
  })

  app.post('/login',async(req,res)=>{
    try{
      const {email,password}=req.body;
      const existingUser=await Signup.findOne({email:email});
      if(existingUser){
        const isValidpass=await bcrypt.compare(password,existingUser.password)
        console.log(isValidpass);
        if(isValidpass){
          res.status(201).json({message:"Login Successful", isLogin:true})
        }
        else{
          res.status(201).json({message:"Invalid Password", isLogin:false})
        }
      }
      else{
        res.status(201).json({message:"Login unsuccessful", isLogin:false})
      }
    }
    catch(err){

    }
  })

  app.listen(port, () => {
    console.log("Server started successfully");
  });