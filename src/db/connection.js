const mongoose = require('mongoose')

const mongoURL = "mongodb://localhost/yoga-api"

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
