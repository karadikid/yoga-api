// Controller will relate to a specific model
// So you want to import that model here
// Note - you can have multiple models within one controller
const Yoga = require("../models/Yoga")

module.exports = {
  // Inside each controller method, you're defining the logic of your app
  // Each 'endpoint' will contain specific instructions...
  // ...on what data should be displayed
  index: async (req, res, next) => {
    Yoga.find({}).then( (yoga) => {
      res.json(yoga)
    })
  },
  create: async (req,res, next) => {
    const asana = new Yoga({
      id: req.body.id,
      sanskrit_name: req.body.sanskrit_name,
      english_name: req.body.english_name,
      img_url: req.body.img_url
    })
    try {
      const newAsana = await asana.save()
      return req.status(201).json(newAsana)
    }
    catch (err){
      return req.status(400).json({messags: err.message})
    }
  },
  update: (req,res, next) => {},
  delete: (req,res, next) => {}
}
