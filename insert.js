var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db)
{
    if(err) throw err;
    console.log("Database Created...!!!");
    var dbo = db.db("myfirstdb");
    var myobj = {name:"career lift Inc", address: "Medanta"};
    dbo.collection("employee").insertOne(myobj,function(err,res)
    {
        if(err) throw err;
        console.log("1 document inserted");
        db.close();
    })
})