const express = require("express")
const app=express();
require('dotenv').config()

app.get('/',(req,res)=>{
res.send("hello nodejs")
})

app.get("/twitter",(req,res)=>{
    res.send("this is tweet page")
})

app.get("/login",(req,res)=>{
    res.send("<h1> plz login in to the app</h1>")
})


app.listen(process.env.PORT,()=>{
    console.log(`App listeninng on port ${process.env.PORT}`);
    
})