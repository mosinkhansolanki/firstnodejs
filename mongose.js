
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/mosin';
mongoose.connect(url); 
const express=require('express');
const app=express();
const {mongodb}=require('mongodb')
app.use(express.json())
const studentSchema = new mongoose.Schema({
    name:String,
    class:String,
    address:String
}) 

app.get('/',async(req,res)=>{
    const student = mongoose.model('asd',studentSchema);
    let data=new student({
        name:"mosin",
        class:"node.js",
        village:"paner",
      
    });
     const resultsss= await data.save()  
     console.log(resultsss); 
     res.send(resultsss)
 })

app.post('/',async(req,res)=>{
    const student = mongoose.model('asd',studentSchema);
    const date=new student(req.body);
    let result=await date.save();
    console.log(result);
    res.send(result)
});


app.put('/:id',async(req,res)=>{
    let data = mongoose.model('asds',studentSchema)
    let result =  await data.updateOne({name:"hiiii"},{$set:req.body})
    res.send(result)
})



app.delete('/:id',async(req,res)=>{
    let data = mongoose.model('asd',studentSchema)
    let result =  await data.deleteOne(req.body)
    res.send(result)
})

app.listen(5000)




