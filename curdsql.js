
 const express=require('express');
 const app=express();
const con=require("./configsql");
app.use(express.json());

app.get('/',(req,res)=>{
con.query("SELECT * FROM `khan`",(err,result)=>{
    if(err) throw err 
     res.send(result)
})
}) 
app.listen(5000)

 app.post('/',(req,res)=>{
const data=req.body;
con.query("INSERT INTO khan SET?",data,(err,result,fields)=>{
res.send(result) 

})
 })
 app.listen(5000);

 app.post('/',(req,res)=>{
const data={
nam:"khan",
email:"khan@gmail.com",
password:"345678",
number:"3245645"
}
con.query("INSERT INTO khan SET?",data,(err,result,fields)=>{ 

if(err) throw err
res.send(result) 

})
 })
// 


  app.put('/:nam',(req,res)=>{
 let  updatedata=["arish","arish@gmail.com","6598","9867",req.params.nam]
 con.query('UPDATE khan SET nam=?,email=?,password=?,number=? WHERE nam=? ', updatedata, (error, results, fields) =>{
 if (error) throw error;
res.send(results)
   })
}) 

// 
app.put('/:name',(req,res)=>{
const dataupdate=["vajeer","vajerr@gmail.com","6744845","9895847475",req.params.name];
con.req("UPDATE khan  SET name=?,email=?,password=?,number=? WHERE name?",dataupdate,(Error,result,fields)=>{
if(error) throw error 
res.send(result)
})
})

app.delete('/:nam',(req,res)=>{
con.query('DELETE FROM khan WHERE nam =?',req.params.nam,(error, results, fields)=> {
if (error) throw error;
res.send(results)
  })
}) 
app.listen(5000) 
app.put('/:nam',(req,res)=>{
   const data= [req.body.nam, req.body.email,req.body.password,req.body.number,req.params.nam]
   con.query("UPDATE khan SET nam=? ,email=?, password=?, number=? WHERE nam = ?",data,(Error,result)=>{
  if(Error) throw Error

  res.send(result)
   })
})
app.listen(50000)  
app.put('/:id',(req,res)=>{
const data=[2,"iroj","iroj@gmail.com","85656","877457567",req.params.id]
con.query("UPDATE `database` SET id=?,name=?,email=?,password=?,number=? WHERE id=?",data,(Error,result)=>{
if(Error) throw Error

res.send(result)
})

})
app.listen(5000)
  
// 
// 
app.put('/:id',(req,res)=>{
const data=[req.body.id, req.body.name,req.body.email,req.body.password,req.body.number,req.params.id]
con.query('update `database` SET id=?, name=?, email=?,password=?,number=? WHERE id=?',data,(Error,result)=>{

if(Error) throw Error 
res.send(result)
})
}) 
app.listen(5000)
// 
// 
app.post('/:id',(req,res)=>{
const data={ 
id:8,
name:"king",
email:"king@gmail.com",
password:"79646",
Number:"8796556",
}
con.query("INSERT INTO `database` SET id=?",data,(Error,result)=>{
 if(Error) throw Error 

 res.send(result)
})
}) 
app.listen(5000) 