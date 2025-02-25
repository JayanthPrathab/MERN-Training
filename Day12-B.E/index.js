const express = require("express");
const dotenv = require("dotenv");
const mdb = require("mongoose");
const bcrypt=require('bcrypt');
const Signup = require("./models/signupSchema");
dotenv.config();


const app = express();
app.use(express.json())
const PORT = 3001;

// console.log(process.env.MONGODB_URL);

mdb
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connection sucessfull");
  })
  .catch((err) => {
    console.log("Check your connection string", err);
  });

app.get("/", (req, res) => {
    console.log("first")
  res.sendFile("D:\\MERN Stack\\Day5\\grid.html");
});

app.post("/signup", async(req, res) => {
  try {
    const {firstName,lastName,email,password,mobile} = req.body
    const hashedpassword= await bcrypt.hash(password,10);
    const newSignup = new Signup({
      firstName: "Mohana",
      lastName: "Priyan.T",
      email: "monik@sjit.ac.in",
      password: "mephisto2005",
      mobile: 9361254364,
    })
    newSignup.save();
    console.log("Signup successful");
    res.status(201).json({ message: "Signup Successful", isSignup: true });
  } catch (err) {
    console.log(err);
    res.status(201).json({ message: "Signup unsuccessful", isSignup: false });
  }
});



app.listen(PORT, () => {
  console.log("Server started successfully");
});
