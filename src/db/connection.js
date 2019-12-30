const mongoose = require('mongoose')

const mongoURL = "mongodb://myUserAdmin:$0crates@localhost:27017/yoga-api?authMechanism=SCRAM-SHA-1&authSource=admin"

//"mongodb://username:password@localhost:27017/dbName?authMechanism=SCRAM-SHA-1&authSource=authDB"
//Start Mongo with Auth:  "mongod --port 27012 --auth"
//Login to mongo with Admin:  "mongo --port 27017 --authenticationDatabase "<authDbName>" -u <adminUserName>""

mongoose.Promise = Promise

// .connect takes two arguments, one is the path to the db
// second argument where you set your settings for the connection
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then( (feedback) => console.log("Yoga Fire!") )
  .catch( error => console.log("Harruken!: ", error) )

module.exports = mongoose
