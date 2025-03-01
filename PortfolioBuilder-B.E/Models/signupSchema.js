const mongoose=require('mongoose');

const signupSchema=mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String,
    mobile:Number
})

const signup_Schema=mongoose.model("signup",signupSchema)
module.exports=signup_Schema;