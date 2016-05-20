var MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/learnyoumongo", function(err, db){
    if(err) throw err;
    var usersCollection = db.collection("users");
    usersCollection.update({
        name: "Tina"
    }, {
        $set:{
            age: 40
        }
    });
    db.close();
});