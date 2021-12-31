var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db)
{
    if(err) throw err;
    console.log("Database connected...!!!");
    var dbo = db.db("myfirstdb");
    dbo.collection("customers").find().limit(2).toArray(function(err, result)
    {
        if(err) throw err;
        console.log(result);
        db.close();
    });
});