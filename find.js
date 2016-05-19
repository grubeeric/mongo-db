var mongo = require("mongodb").MongoClient;
var age = process.argv[2];

mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db){
    if(err){
        console.log(err);
    }
    var parrots = db.collection('parrots');
    parrots.find({
        age: {
            $gt: +age
        }
    }).toArray(function(err, docs){
        if(err){console.log(err);}
        console.log(docs);
        db.close();
    });
})