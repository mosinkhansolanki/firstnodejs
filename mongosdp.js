
const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/mosin";
mongoose.connect(url);
const mongodb=require('mongodb');
const express=require('express');
const app=express();
app.use(express.json()) 
 
const studentSchema= new mongoose.Schema({
     name: String,
     class: String,
     addresh: String,
     village: String
}) ;





// app.delete('/:id',async(req,res)=>{
    // const data=mongoose.model('asds',studentSchema);
    // const result= await data.deleteOne(req.body);
    // res.send(result);
    // console.log(result);
// })
// app.listen(5000) 


// app.get('/',async(req,res)=>{
    // const student=mongoose.model('asds',studentSchema)
    //c onst data=new student({
        // name:"rizwan",
        // class:"scince",
        // village:"khanpura",
    // })
    // const resultsss=await data.save();
    // res.send(resultsss);
// })
// app.listen(5000)
// 
// 
// app.post('/:id',async(req,res)=>{
    // const data=mongoose.model('asds',studentSchema);
    // const result= await data.insertMany(req.body);
    // res.send(result);
    // console.log(result);
//    })
//    app.listen(5000) 
// 
// 
//    app.put('/:id',async(req,res)=>{
    // const data=mongoose.model('asds',studentSchema);
    // const result= await data.updateOne({name:"vajeer"},{$set:req.body});
    // res.send(result);
    // console.log(result);
//    })
//  app.listen(5000) 

//   app.get('/',async(req,res)=>{
    //  const data=mongoose.model('asds',studentSchema);
    //  const result=await data.find()
    //  res.send(result[result.length-1]);  }) 
//   app.listen(5000) 



app.get('/:id',async(req,res)=>{
    const data=mongoose.model('asds',studentSchema);
    const result=await data.find({
        "$or":[
          {"name":{$regex:req.params.id}}
        ] 
    }) 
    res.send(result);
    console.log("hiiiiiiiiiii");
}) 
app.listen(6000) 


