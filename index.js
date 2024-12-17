const express =require('express')
const app=express()
const db=require('./db/db ')



app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/api/v1',router) 

app.listen(2000,()=>{
    console.log("server is now running ");
    
})