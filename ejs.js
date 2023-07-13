const express=require('express');
const app=express();

app.set('view engine','ejs')


const arr=[
    {
        name:"mohsin",
        class: "node.js",
        village:"paner",
    },
    {
      name:"ramesh",
        class: "Html",
        village:"merta",
    },
 ] 
 app.get('/login',(req,res)=>{
    res.render("login",{arr})
}) 
app.listen(3000) ;
