var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    console.log("Database Created...!!!");
    var dbo = db.db("Mydb");
    dbo.createCollection("Customers", function(err,res)
    {
        if(err) throw err;
        console.log("Collection Created");
        db.close();
    });
    
});