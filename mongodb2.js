

const getdata = require('./try2');
const express = require('express');
const app = express();
const mongodb= require('mongodb')
app.use(express.json());



 app.get('',async(req,res)=>{
const data=await getdata('student','detal');
const result=await data.find({}).toArray();
res.send(result);
console.log(result);
})
app.listen(5000)




app.post('',async(req,res)=>{
const data=await getdata('student','detal');
const result=await data.insertOne(req.body)
res.send(result);
console.log(result);
})
app.listen(5000)







app.put('',async(req,res)=>{
const data=await getdata('student','detal');
const result=await data.updateOne({name:"sameer"},{$set:req.body}) //$ set:req.body
res.send(result);
console.log(result);
})
app.listen(5000)





app.delete('',async(req,res)=>{
const data=await getdata('student','detal');
const result=await data.deleteOne({name:req.body.name})
res.send(result);  
console.log(result);
})
  app.listen(5000)


app.get('/', async (req, res) => {
    let data = getdata('student', 'detal');
    let finddata = await (await data).find({}).toArray()
 
    let data2 = getdata('dreamcode', 'students');
    let finddata2 = await (await data2).find({}).toArray()
 
    let arr = [];
    arr.push(...finddata)
    arr.push(...finddata2)
   
res.send(arr);
     let data3= await getdata('mosin','asd');
    let db=await data3.insertMany(arr);
     res.send(db)
     })  

app.delete('/',async (req,res)=>{
     let data = await getdata('mosin',"asd")
     let result= await data.deleteOne({_id:new mongodb.ObjectId(req.body.id)})
     res.send(result)
 });
 app.listen(5000)










