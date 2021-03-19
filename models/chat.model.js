var mongoose = require("mongoose")
var Schema = mongoose.Schema

var ChatSchema = new Schema({
  user: String,
  message: String,
  timeStamp: String
});

var Chat = mongoose.model("Chat", ChatSchema)
module.exports = Chat
