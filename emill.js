
const express=require('express');

const app=express();
const arr=require('./emil')

app.get('',(req,res)=>{
    let data=arr.filter((value,index)=>{
    return value.emil == req.query.emil;
    }) 
    if (data.length==0){
        res.send("invalid email");
    } 
    else{
        res.send(data);
    }
    // res.send(data)
})
// console.log(data);
app.listen(3000);






















