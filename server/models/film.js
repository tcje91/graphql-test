const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const filmSchema = new Schema({
  title: String,
  genre: String,
  year: Number,
  director_id: String
})

module.exports = mongoose.model("Film", filmSchema)