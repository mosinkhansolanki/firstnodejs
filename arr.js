// // 
// // 
// // const data = require('./index')

// // console.log(data)
// // 
// // const fs=require('fs');
// //  const input=process.argv 
// // if (input[2]=="add"){
//     // fs.writeFileSync(input[3],input[4]) ;
// // } 
// // else if (input[2]=="remove"){
// //    fs.unlinkSync(input[3]); 
// // }
// // else{
//     // console.log("invalid output");
// // }
// // 
// // fs.unlinkSync(input[3]);
// //  



// // const app=require('express')();
// // 
// // 
// // 
// // app.get('',(req,res)=>{
//     // res.send({name:req.query});
// // }).listen(5000);



// const arr= [  
//     {
//        name: "mosin",
//        class: "12th",
//        age: "19",
//     },
    
//     {
//       name: "maksud",
//       class: "10th",
//       age: " 17",
//     },
    
//     {
//       name: "firoj",
//       class: "9th",
//       age: " 22",
//     },
//       ] 
//       arr[2].name=arr[0].name+arr[lenght-1].name
//        arr[2].class=arr[0].class
//        arr[2].class ="html"
    
    





//        const input=process.argv;
//        let obj={
//          name: input[2],
//          class: input[3],
//          age: input[4],
//          village: input[5],
//        } 
//        const http=require('http')
//        http.createServer((req,res)=>{
//          res.write(JSON.stringify(arr))
//          res.end();
//        }).listen(5000)
       
//        const express=require('express');
// const app=express();
// let arr=[
//     {
//         name: "mosin",
//         village: "paner",
//         class: "node.js"
//     }, 
//     {
//         name: "raja",
//         village: "pbc",
//         class: "reactnative"
//     },
//     {
//         name: "sikinder",
//         village: "sheranibaad",
//         class: "react.js"
//     },
//     {
//         name: "jkir",
//         village: "pbc",
        
//         class: "html"
//      },
// ];  
// app.get('',(req,res)=>{
//     const data=arr.filter((value,index)=>{
//         return value.name==req.query.name
//     }) 
//         res.send(data)   
// }) 
// app.listen(5000);



// const arr=require('./index')
// console.log(arr);
// arr();


// const arr=require('./index')
// console.log(arr);

const dk=require('./index')
console.log(dk);
dk();