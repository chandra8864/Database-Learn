const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://chandrasourabh81:1fmcLdNe2QZlkOjD@cluster0.mfaw1.mongodb.net/').then(()=>{
    console.log("connect to database");
    

}).catch((e)=>{
    console.log(e);
    
})