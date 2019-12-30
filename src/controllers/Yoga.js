// Controller will relate to a specific model
// So you want to import that model here
// Note - you can have multiple models within one controller
const Yoga = require("../models/Yoga")

module.exports = {
  // Inside each controller method, you're defining the logic of your app
  // Each 'endpoint' will contain specific instructions...
  // ...on what data should be displayed
  index: (req, res) => {
    Yoga.find({}).then( (yoga) => {
      res.json(yoga)
    })
  },
  create: (req,res) => {},
  update: (req,res) => {},
  delete: (req,res) => {}
}

