
 const getdata = require('./try2');
 const express = require('express');
//  const { MongoDBNamespace } = require('mongodb');
 const app = express();
 const mongodb= require('mongodb')

// const { appendFile } = require("fs");





 app.get('',async(req,res)=>{
const data=await getdata('student','detal');
const result=await data.find({}).toArray();
res.send(result);
console.log(result);
})
app.listen(5000)
// 
// 
// 
// 
// 
// 
app.post('',async(req,res)=>{
const data=await getdata('student','detal');
const result=await data.insertOne(req.body)
res.send(result);
console.log(result);
})
app.listen(5000)
// 
// 
// 
// 
// 
// 
// 
app.put('',async(req,res)=>{
const data=await getdata('student','detal');
const result=await data.updateOne({name:"sameer"},{$set:req.body})
res.send(result);
console.log(result);
})
app.listen(5000)
// 
// 
// 


// app.delete('',async(req,res)=>{
// const data=await getdata('student','detal');
// const result=await data.deleteOne({name:req.body.name})
// res.send(result);
// console.log(result);
// })
//   app.listen(5000)


