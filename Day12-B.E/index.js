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

app.post('/login', async(req,res)=>{
    try {
        const { email, password } = req.body;
    
        // Check if user exists
        const user = await Signup.findOne({ "email":'srjayanth2004@gmail.com' });
        if (!user) {
          return res.status(400).json({ message: "User not found", isLogin: false });
        }
    
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ message: "Invalid credentials", isLogin: false });
        }
    
        console.log("Login successful");
        res.status(200).json({ message: "Login Successful", isLogin: true });
    
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Login failed", isLogin: false });
      }
})

app.listen(PORT, () => {
  console.log("Server started successfully");
});
