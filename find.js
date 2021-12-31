var MongoClient = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err, db)
{
    if(err) throw err;
    var dbo = db.db("myfirstdb")
    console.log("Database Connected....!!!");
    dbo.collection("customers").findOne({}, function(err, result)
        {
            if(err) throw err;
            console.log("Company name: "+result.name);
            db.close();
        });
});