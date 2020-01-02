// Import your express library and your controller
// This will allow us to access a particular method and match it to a route
const express = require("express")
const yogaController = require("../controllers/Yoga")

// Access the express router, which comes with the library
const yogaRouter = express.Router()

// Assign each key from my controller to a specific route
yogaRouter.get("/", yogaController.index)

yogaRouter.post('/', yogaController.create)

yogaRouter.post('/delete', yogaController.delete)

module.exports = yogaRouter