var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db)
{
    if(err) throw err;
    var dbo = db.db("myfirstdb");

    dbo.collection('customers').aggregate(
        [
            {
                $lookup:
                {
                    from: 'employee',
                    localField: 'name',
                    foreignField:'address',
                    as:'customersdetails'
                }
            }
        ]
    ).toArray(function(err,res) {
        if(err) throw err;

        console.log(JSON.stringify(res));
        db.close();
        
    });
});