
const {MongoClient}=require("mongodb");
const url="mongodb://127.0.0.1:27017";
const client=new MongoClient(url);
const dbname="student"; 



  let express=require('express'); 
  let app=express();
  app.get('',async(req,res)=>{
    await client.connect();
    console.log("connected succesfully to server");
    const db=client.db(dbname);
    const collection = db.collection('detal')
    const finds= await collection.find({}).toArray();
    console.log("=========findresult=======>",finds);
    res.send(finds);
  })
  app.listen(5000)


const getdata=async()=>{
    await client.connect();
    console.log("connected succesfully to server");
    const db=client.db(dbname);
    const collection = db.collection('detal')
    const finds= await collection.find({}).toArray();
    console.log("=========findresult=======>",finds);
    return"done.";
} 
getdata();


