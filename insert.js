var MongoClient = require("mongodb").MongoClient;

var firstName = process.argv[2];
var lastName = process.argv[3];

var jsonDoc = {
    firstName: firstName
    , lastName: lastName
};

MongoClient.connect("mongodb://localhost:27017/learnyoumongo", function(err, db){
    if(err) throw err;
    var collection = db.collection('docs');
    collection.insert(jsonDoc, function(err, db){
        if(err) throw err;
        console.log(JSON.stringify(jsonDoc));
        db.close();
    });
        
})