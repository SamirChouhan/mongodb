var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    var dbo = db.db("myfirstdb");
    console.log("Database connected...!!!");
    var myquery = {address: /^O/};
    dbo.collection("customers").deleteMany(myquery, function(err, result)
    {
        if(err) throw err
        console.log(obj.result.n+"document(s) deleted");
        db.close();
    });
});