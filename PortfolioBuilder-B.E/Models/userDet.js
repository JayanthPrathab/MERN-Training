const mongoose=require('mongoose');

const userDet=mongoose.Schema({
    name:String,
    about:String,
    experience:[String],
    skills:[String],
    education:String,
    certifications:String
})

const user_Det=mongoose.model("user",userDet);
module.exports=user_Det;