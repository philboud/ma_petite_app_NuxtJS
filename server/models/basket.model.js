var mongoose = require("mongoose")
var Schema = mongoose.Schema

var ProductSchema = new Schema({
  sticker: String,
  description: String,
  modele: String,
  price: String
});

var Product = mongoose.model("Product", ProductSchema)
module.exports = Product