
const{MongoClient}=require('mongodb');
const url="mongodb://127.0.0.1:27017";
const client=new MongoClient(url);




async function mosin(databasename,collectionname){
    let result=await client.connect();
    let db=result.db(databasename);
    let collection=db.collection(collectionname);
    return collection;

}

module.exports=mosin;


