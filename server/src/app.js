const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose')
var Item = require("../models/items.model");

mongoose.connect('mongodb://localhost:27017/itemsDB');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// Fetch all posts
app.get('/items', (req, res) => {
  Item.find({}, 'title description', function (error, items) {
    if (error) { console.error(error); }
    res.send({
      items: items
    })
  }).sort({_id:-1})
})

// Add new item
app.post('/items', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_item = new Item({
    title: title,
    description: description
  })

  new_item.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Item saved successfully!'
    })
  })
})
// Fetch single post
app.get('/item/:id', (req, res) => {
  var db = req.db;
  Item.findById(req.params.id, 'title description', function (error, item) {
    if (error) { console.error(error); }
    res.send(item)
  })
})

// Update a item
app.put('/items/:id', (req, res) => {
  var db = req.db;
  Item.findById(req.params.id, 'title description', function (error, item) {
    if (error) { console.error(error); }
    item.title = req.body.title
    item.description = req.body.description
    item.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete an item
app.delete('/items/:id', (req, res) => {
  var db = req.db;
  Item.remove({
    _id: req.params.id
  }, function(err, item){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

app.listen(process.env.PORT || 8081)