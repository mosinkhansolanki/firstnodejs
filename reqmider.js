const express=require('express');
const app=express();

const reqmideerware=require('./reqmider2') 

app.use(reqmideerware);
app.get('',(req,res)=>{
res.send("this is a home pagr");
})

app.get('/about',(req,res)=>{
    res.send('this is a about page');
})
app.listen(5000);