const express = require('express')

const app=express()
app.get('/',(req,res)=>{
    res.sendFile("D:\\MERN Stack\\Day5\\grid.html")
});
const PORT=3001

app.listen(PORT,()=>{console.log("Server started successfully")})

