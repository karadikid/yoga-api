const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

let dbHost = process.env.DB_HOST;
let username = process.env.DB_USER;
let password = process.env.DB_PASS;

//Mongodb Atlas Host gacluster-3y49p.mongodb.net/test
//heroku config:set DB_URL="mongodb+srv://myUserAdmin:M00ngooDb8@gacluster-3y49p.mongodb.net/test?retryWrites=true"

//Mongo URL LOCAL
const mongoURL = `mongodb://${username}:${password}@${dbHost}:27017/yoga-api?authMechanism=SCRAM-SHA-1&authSource=admin`

//Mongo URI Atlas
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = `mongodb://${username}:${password}@${dbHost}:27017/yoga-api?authMechanism=SCRAM-SHA-1&authSource=admin`;
}

//"mongodb://username:password@localhost:27017/dbName?authMechanism=SCRAM-SHA-1&authSource=authDB"
//Start Mongo with Auth:  "mongod --port 27012 --auth"
//Login to mongo with Admin:  "mongo --port 27017 --authenticationDatabase "<authDbName>" -u <adminUserName>""

mongoose.Promise = Promise

// .connect takes two arguments, one is the path to the db
// second argument where you set your settings for the connection
//Change mongoURL to mongoURI and vice versa for local vs. remote testing
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then( (feedback) => console.log("Yoga Fire!") )
  .catch( error => console.log("Harruken!: ", error) )

module.exports = mongoose

//brew install mongodb/brew/mongodb-community-shell
//mongo "mongodb+srv://gacluster-3y49p.mongodb.net/test"  --username myUserAdmin