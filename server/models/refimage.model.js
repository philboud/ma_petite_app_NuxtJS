var mongoose = require("mongoose")
var Schema = mongoose.Schema

var RefImageSchema = new Schema({
  image: String,
  sticker: String,
  modele: String,
  prix: Number,
  description: String,
  checked: Boolean
});

var Refimage = mongoose.model("Refimage", RefImageSchema)
module.exports = Refimage