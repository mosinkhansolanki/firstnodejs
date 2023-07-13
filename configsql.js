
const mysql=require('mysql');
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"id"
});

con.connect((err)=>{
    if(err){
        console.log("err");
    } 
    else{
        console.log("connect");
    }
})
con.query("SELECT *FROM `new data1`",(err,data)=>{
     console.log(data);
}) 
module.exports=con; 







