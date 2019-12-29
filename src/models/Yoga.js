const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const YogaSchema = new Schema({
  id: {
    type: number,
    required: true
  },
  sanskrit_name: {
    type: String,
    trim: true,
  },
  english_name: {
    type: String,
    trim: true,
  },
  img_url: {
    type: String,
    trim: true,
  },
  user_id: number
})

const Yoga = mongoose.model("Yoga", YogaSchema)

module.exports = Yoga