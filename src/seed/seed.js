// Import the connection file at the top of your seed
const mongoose = require('../db/connection')
const data = require('../db/yoga-api.json')

// Then, import your model separately
const Yoga = require('../models/Yoga')

// Write our seed file
// Delete the original content first
Yoga.deleteMany({}).then( () => {
  Yoga.create(data).then( (dataReturn) => {
    console.log(dataReturn)
    process.exit()
  })
  .catch( (err) => {
    console.log("Kalima fail: ", err)
  })
})
