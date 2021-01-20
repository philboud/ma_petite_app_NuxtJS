const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose')
var Item = require("../models/items.model")
var Profile = require("../models/profile.model")

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

// Fetch all profiles
app.get('/profiles', (req, res) => {
  var laReq = 'lastname firstname address'
  Profile.find({}, laReq, function (error, profiles) {
    if (error) { console.error(error); }
    res.send({
      profiles: profiles
    })
  })
})

// Add new profile
app.post('/profiles', (req, res) => {
  var db = req.db;
  var lastname = req.body.lastname;
  var firstname = req.body.firstname;
  var address = req.body.address
  var new_profile = new Profile({
    lastname: lastname,
    firstname: firstname,
    address: address
  })

  new_profile.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Profile saved successfully!'
    })
  })
})

// Fetch single profile
app.get('/profiles/:id', (req, res) => {
  var db = req.db;
  var laReq = 'lastname firstname address'
  Profile.findById(req.params.id, laReq, function (error, profile) {
    if (error) { console.error(error); }
    res.send(profile)
  })
})

// Update a profile
app.put('/profiles/:id', (req, res) => {
  var db = req.db;
  Profile.findById(req.params.id, 'title description', function (error, profile) {
    if (error) { console.error(error); }
    profile.lastname = req.body.lastname
    profile.firstname = req.body.firstname
    profile.address = req.body.address
    profile.save(function (error) {
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
app.delete('/profiles/:id', (req, res) => {
  var db = req.db;
  Profile.remove({
    _id: req.params.id
  }, function(err, profile){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

// Fetch all items
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
// Fetch single item
app.get('/item/:id', (req, res) => {
  var db = req.db;
  Item.findById(req.params.id, 'title description', function (error, item) {
    if (error) { console.error(error); }
    res.send(item)
  })
})

// Update an item
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