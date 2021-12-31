var MongoClient =  require ('mongodb').MongoClient
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db)
{
    if(err) throw err
    var dbo = db.db("myfirstdb");
    console.log("Database connected...!!!");
    var query = {address: "Vijay nagar"};
    dbo.collection("customers").find(query).toArray(function(err,result)
    {
        if(err) throw err
        console.log(result);
        db.close();
    })
})