module.exports=reqmideerware=('',(req,res,Next)=>{
    if (!req.query.age){
        res.send("plese enter the id ");
    }
    else if(req.query.age >=18){
        res.send("age is valid");
    }
    else if(req.query.age <=18){
        res.send("age is invalid");
    } 
    else{
        Next();
    }
})
 