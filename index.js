 // // // // // // // // const http = require('http')
 // // // // // // // // http.createServer((req, res) => {
 // // // // // // //   // res.write(JSON.stringify(data))
 // // // // // // //   // res.end()
 // // // // // // // // }).listen(5000)
 // // // // // // // // 
 // // // // // // // // 
 // // // // // // // // 
 // // // // // // // // const data = [
 // // // // // // // // { name: { dk: "html" }, c: { vk: [{ mk: { ik: "dear" } }] } },
 // // // // // // // // { mosin: [{ nrea: "sami" }, [{ dmlt: { dehli: "lalakila" } }]], nk: { vk: "deavasi" } }
 // // // // // // // // 
 // // // // // // // // ];
 // // // // // // // // 
 // // // // // // // // 
 // // // // // // // // 
 // // // // // // // // module.exports = data;
 // // // // // // // // console.log(data);
 // // // // // // // // 
 // // // // // // // // 
 // // // // // // // //  
// const { appendFile } = require("fs");
 // // const { appendFile } = require('fs');
 // // // // // // // 
 // // // // // // // let input=process.argv; 
 // // // // // // // let obj={
 // // // // // // // 
 // // // // // //   // name: input[2],
 // // // // // //   // class: input[3],
 // // // // // //   //  age: input[4], 
 // // // // // //   //  }
 // // // // // // //  const http=require('http');
 // // // // // // //  http.createServer((req,res)=>{
 // // // // // //   // res.writeHead(200,{'contant-type':'application\json'});
 // // // // // //   // res.write(JSON.stringify(obj));
 // // // // // //   // res.end();
 // // // // // // //  }).listen(5000)
 // // // // // // //  
 // // // // // // // let a=5;
 // // // // // // // let b=10;
 // // // // // // // console.log(a);
 // // // // // // // console.log(b);
 // // // // // // // 
 // // // // // // // const data=new Promise((resolve, reject) => {
 // // // // // //   // 
 // // // // // //   // setTimeout(() => {
 // // // // // //     // resolve(500)
 // // // // // //   // }, 2000);
 // // // // // // // }) 
 // // // // // // // data.then((b)=>{
 // // // // // //   // console.log(a+b);
 // // // // // // // })
 // // // // // // //  const data=process.argv;
 // // // // // // // 
 // // // // // //   // let obj={
 // // // // // //   // name: data[2],
 // // // // // //   // class:data[3],
 // // // // // //   // age: data[4],
 // // // // // // //  }
 // // // // // // // 
 // // // // // // // const http=require('http')
 // // // // // // //  http.createServer((req,res)=>{
 // // // // // //   // res.write(JSON.stringify(obj));
 // // // // // //   // res.end()
 // // // // // // //  }).listen(5000);
 // // // // // // // 
 //
 // 
 // const input=process.argv;
 // 
 // let obj={
 //   name: input[2],
 //   class: input[3],
 //   age: input[4],
 //   village: input[5],
 // } 
 // const http=require('http')
 // http.createServer((req,res)=>{
 //   res.write(JSON.stringify(arr))
 //   res.end();
 // }).listen(5000)
 //   const arr= [  
 // {
 //    name: "mosin",
 //    class: "12th",
 //    age: "19",
 // },
 // 
 // {
 //   name: "maksud",
 //   class: "10th",
 //   age: " 17",
 // },
 // 
 // {
 //   name: "firoj",
 //   class: "9th",
 //   age: " 22",
 // },
 //   ] 
 //   arr[2].name=arr[0].name+arr[lenght-1].name
 //    arr[2].class=arr[0].class
 //    arr[2].class ="html"
 // 
 // 
 // // // // //   arr[2].name=arr[1].name+=arr=[0];
 // // // // //   arr[2].clas=arr[1].class;
 // // // // //   arr[2].class="vfjb"









// // // // // // // // // // 
// // // // // // // // // // const fs = require('fs')
// // // // // // // // // // const path = require('path')
// // // // // // // // // // const pathname = path.join(__dirname, "curdak")
// // // // // // // // // // console.log("====>", pathname);
// // // // // // // // // //  
// // // // // // // // // // 
// // // // // // // // // //  
// // // // // // // // // // const filepath = pathname + '/abv.js'
// // // // // // // // // // fs.writeFileSync(filepath, 'this is test file')
// // // // // // // // // // 
// // // // // // // // // //  
// // // // // // // // // //  fs.unlinkSync(`${pathname}/abcc.js`); 
// // // // // // // // // // 
// // // // // // // // // // fs.readFile(filepath,'utf8',(err,item)=>{
// // // // // // // // //     //  console.log("==>" ,item);
// // // // // // // // // // });
// // // // // // // // // // 
// // // // // // // // // 
// // // // // // // // // const app=require('express')();

// // // // // // // // // app.get ('',(req,res)=>{
// // // // // // // //     // res.send("this is first page");
// // // // // // // // // })
// // // // // // // // // app.listen(5000);

// // // // // // // // // const api=require('express')();
// // // // // // // // // 
// // // // // // // // // api.get('',(req,res)=>{
// // // // // // // //     // res.send("hellllooooooooooooooooo")
// // // // // // // // // })
// // // // // // // // // .listen(5000);  

// // // // // // // // // const app=require('express')();
// // // // // // // // // 














// // // // // // // // // const fs=require('fs')
// // // // // // // // // const path=require('path') 
// // // // // // // // // const dirname=path.join(__dirname,'curd');
// // // // // // // // // console.log(dirname); 

// // // // // // // // // const first=dirname+"/abc.js";
// // // // // // // // // fs.writeFileSync(first,"hooookkkkkk") 


// // // // // // // // // // fs.unlinkSync(`${dirname}/abc.js`)


// // // // // // // // // 
// // // // // // // // // const fs=require('fs');
// // // // // // // // // const path=require('path');
// // // // // // // // // const dirname=path.join(__dirname,'curd') ;
// // // // // // // // // const apple=dirname+ "/abcde.jss" 
// // // // // // // // // fs.writeFileSync(apple,"this is a moshin");  

// // // // // // // // // fs.unlinkSync(`${dirname}/abc.js`); 
// // // // // // // // // fs.readFile(dirname,'utf8',(err,item)=>{
// // // // // // // //     //   console.log("==>" ,item,"hiiiiii");
// // // // // // // // //    });  

// // // // // // // // // 
// // // // // // // // // const fs=require('fs');
// // // // // // // // // const path=require('path');
// // // // // // // // // const pathname=path.join(__dirname,"curd");
// // // // // // // // // console.log("====>",pathname);
// // // // // // // // // const filepath=pathname + "/abc.js";
// // // // // // // // // fs.writeFileSync(apple,"this is a new file"); 

// // // // // // // // // fs.unlinkSync(abc.js);
// // // // // // // // // const fs=require('fs');
// // // // // // // // // const path=require('path');
// // // // // // // // // const pathname=path.join(__dirname,"curd");
// // // // // // // // // console.log("===>",pathname);
// // // // // // // // // const filepath=pathname+'/text.js';
// // // // // // // // // fs.writeFileSync(filepath,"hello my dear friend"); 





 
 
 
 
 
 

// // // // // // // // //  fs.unlinkSync(`${pathone}/abc.js`) 
// // // // // // // // // 
// // // // // // // // // fs.readFile(pathone,(err,item)=>{
// // // // // // // //     // console.log(item,"mosin");
// // // // // // // // // })  

// // // // // // // // // const fs=require('fs')
// // // // // // // // // const path=require('path');
// // // // // // // // // const pathone=path.join(__dirname ,"curd");
// // // // // // // // // const apple=pathone + "/abc.txt" 
// // // // // // // // // console.log("===>",pathone);
// // // // // // // // // fs.writeFileSync(apple,"ths is a new file"); 
// // // // // // // // // 

// // // // // // // // // fs.readFile(pathone,(err,item)=>{
// // // // // // // //     // console.log(item,"mosin");
// // // // // // // // // }) 

// // // // // // // // // fs.appendFile(apple,"hii my name",(err)=>{
// // // // // // // //     // if (!err)console.log("hii my name");
// // // // // // // // // })



// // // // // // // // // fs.appendFile(apple,"hello world",(err)=>{
// // // // // // // // //    if (!err) console.log("hiiiii");
// // // // // // // // // })  


// // // // // // // // // const index=require('express')();
// // // // // // // // // 
// // // // // // // // // index.get("",(req,res)=>{
// // // // // // // // //  res.send("hiiiiiiiiiiiii"); 
// // // // // // // // // }).listen(5000)



// // // // // // // // // const index=require('express')();
// // // // // // // // // 
// // // // // // // // // index.get("/service",(req,res)=>{
// // // // // // // //     // res.send({
// // // // // // // //         // name:req.query,
// // // // // // // //     // })
// // // // // // // // // }).listen(5000)
// // // // // // // // // 
// // // // // // // // //   


// // // // // // // // // 
// // // // // // // // // 
// // // // // // // // // 
// // // // // // // // // const fs=require('fs')
// // // // // // // // // const path=require('path');
// // // // // // // // // const pathname=path.join(__dirname,"curd");
// // // // // // // // // const filepath=pathname+ "/abcdd.txt";
// // // // // // // // // fs.writeFileSync(filepath,"hellloooooooooooooo")  
// // // // // // // // // 
// // // // // // // // // fs.unlinkSync(`${pathname}/abcdd.txt`) 
// // // // // // // // // 
// // // // // // // // // 
// // // // // // // // // fs.readFile(pathname,(err,item)=>{
// // // // // // // // //   console.log(item,"mosin");
// // // // // // // // // }) 
// // // // // // // // // 
// // // // // // // // // fs.appendFile(filepath,"this is a new file mosinnnnnnnnnnnn",(err)=>{
// // // // // // // //     // console.log("helllllooooo");
// // // // // // // // // })
  
// // // // // // // // // 
// // // // // // // // // const express=require('express');
// // // // // // // // // const app= express();
// // // // // // // // // 
// // // // // // // // //  let arr=[ 
// // // // // // // //     // {
// // // // // // // //     // name:"mosin" ,
// // // // // // // //     // class:"nodejs"
// // // // // // // //     // }, 
// // // // // // // //     // {
// // // // // // // //         // name:"saddam" ,
// // // // // // // //         // class:"java"
// // // // // // // //         // },
// // // // // // // //         // 
// // // // // // // // // 
// // // // // // // // // ];
// // // // // // // // //   app.get('',(req,res)=>{
// // // // // // // //     // let data=arr.filter((value,index)=>{
// // // // // // // //         // return value.name==req.query.name
// // // // // // // //     // })
// // // // // // // //     // res.send(data)
// // // // // // // // //   })
// // // // // // // // // 
// // // // // // // // //   app.listen(5000)
// // // // // // // // //  
// // // // // // // // // const express=require('express');
// // // // // // // // // const app=express();
// // // // // // // // // let str="akram ramesh ";
// // // // // // // // // 
// // // // // // // // //  app.get('',(req,res)=>{
// // // // // // // //     // let newstr=str.split(" ",(value,index)=>{
// // // // // // // //         //  return value.akram==req.query.ramesh
// // // // // // // //     // }) 
// // // // // // // //     // res.send(newstr);
// // // // // // // // // 
// // // // // // // // //  }); 
// // // // // // // // //  app.listen(5000); 
// // // // // // // // // 



 
 

 
// // // // // // // // const data=require=()=>{
// // // // // // // //     console.log("hiiiiiii");
// // // // // // // // }
 
// // // // // // // // module.exports=data;


// // // // // // // const fs = require('fs')
// // // // // // // const path = require('path')
// // // // // // // let pathone = path.join(__dirname, "curd");
// // // // // // // const filepath = pathone + "/texxt.js";
// // // // // // // fs.writeFileSync(filepath, "hellooooo"); 

// // // // // // // // fs.unlinkSync(`${pathone}/texxt.js`)

// // // // // // // // fs.readFile('hello',(req,item)=>{
// // // // // // // //  
// // // // // // // //   console.log(item,"hiiiii");

// // // // // // // // // })

// // // // // // // //  

// // // // // // // fs.appendFile(filepath,"this is new car",(err)=>{
// // // // // // //     console.log("hello this is ha");
// // // // // // // })



// // // // // // const fs=require('fs')

// // // // // // const input=process.argv;
 
// // // // // //  if (input[2]=="add"){
// // // // // //     fs.writeFileSync(input[3],input[4]);
// // // // // //  } 
// // // // // //  else if (input[2]=="remove"){
// // // // // //     fs.unlinkSync(input[3]);
// // // // // //  } 
// // // // // //  else{
// // // // // //     console.log("invalid");
// // // // // //  } 
// // // // // const input=process.argv;

// // // // // const arr=[
// // // // //     {
// // // // //         name: input[2],
// // // // //         class: input[3],
// // // // //         village: input[4]
// // // // //     }, 
// // // // //     {
// // // // //         name: input[5],
// // // // //         class: input[6],
// // // // //         village: input[7]
// // // // //     },
// // // // // ] 

// // // // // const http=require('http');

// // // // // http.createServer((req,res)=>{
// // // // //     res.write(JSON.stringify(arr));
// // // // //     res.end();

// // // // // }).listen(5000); 
// // // // // console.log(arr); 


// // // // let a=5;
// // // // let b=20;
// // // // console.log(a);
// // // // console.log(b);  

// // // // let data=new Promise((resolve,reject)=>{
// // // //     setTimeout(() => {
// // // //         resolve("mosin")
// // // //      }, 2000); 
// // // // })  
// // // //  data.then((b)=>{
// // // //     console.log(a+b);
// // // //  }) 
 

 
// // // const express=require('express');
// // // const app=express();

// // // const arr=[ 
// // //     {
// // //         name:"mosin",
// // //         class: "node.js",
// // //         village: "paner"
        
// // //     },
// // // ] 

// // // // module.exports=arr;

// // // // const dk = ()=>{
// // // // console.log("mosin khan")
// // // // }
// // // // 
// // // // 
// // // // 
// // // // module.exports = dk;
// // // // 
// // // // 
// // // // 
// // // //  app.get('',(req,res)=>{
// // //     // const data=arr.filter((value,index)=>{
// // //     //    return value.name=req.query.name
// // //     // }) 
// // //     // res.send(data)
// // // //  }).listen(5000)

 
// // const dk=()=>{
// //     console.log("mosin khan");
// // }

// // module.exports=dk; 


// let a=5;
// let b=10;
// console.log(a)
// console.log(b) 
// const data=new Promise((resolve, reject) => {
    // setTimeout(()=>{
    //   resolve(200);
    //  },2000)
// }) 
// data.then((b)=>{
//   console.log(a+b);
// })


       
a=10;
console.log(a);
const b=10;
console.log(b);

// const data=setTimeout((resolve,reject) => {
    //  resolve(500)
// }, 2000);
// 














