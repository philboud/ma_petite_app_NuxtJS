const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
var mongoose = require('mongoose')
var Item = require("../models/items.model")
var Profile = require("../models/profile.model")
var Product = require("../models/basket.model")

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
  var laReq = 'lastname firstname address dataperso'
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
  var dataperso = req.body.dataperso
  var new_profile = new Profile({
    lastname: lastname,
    firstname: firstname,
    address: address,
    dataperso: dataperso
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
  var laReq = 'lastname firstname address dataperso'
  Profile.findById(req.params.id, laReq, function (error, profile) {
    if (error) { console.error(error); }
    res.send(profile)
  })
})

// Update a profile
app.put('/profiles/:id', (req, res) => {
  var db = req.db;
  Profile.findById(req.params.id, 'profile', function (error, profile) {
    if (error) { console.error(error); }
    profile.lastname = req.body.lastname
    profile.firstname = req.body.firstname
    profile.address = req.body.address
    profile.dataperso = req.body.dataperso
    console.log(req.body.dataperso)
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

// Delete a profile
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
// Fetch all products in basket
app.get('/products', (req, res) => {
  Product.find({}, 'image price', function (error, products) {
    ;
    if (error) { console.error(error);
     }console.log(products)
    res.send({
      products: products,
    })
  }).sort({_id:-1})
})

// Add new product in basket
app.post('/products', (req, res) => {
  
  var db = req.db;
  var image = req.body.image;
  var price = req.body.price;
  var new_product = new Product({
    image: image,
    price: price
  })
  new_product.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Product saved successfully!'
    })
  })
})
// Fetch single product in basket
app.get('/product/:id', (req, res) => {
  var db = req.db;
  Product.findById(req.params.id, 'image price', function (error, product) {
    if (error) { console.error(error); }
    res.send(product)
  })
})

// Update a product in basket
app.put('/product/:id', (req, res) => {
  var db = req.db;
  Product.findById(req.params.id, 'image price', function (error, product) {
    if (error) { console.error(error); }
    product.image = req.body.image
    product.price = req.body.price
    product.save(function (error) {
      if (error) {
        console.log(error)
      }
      res.send({
        success: true
      })
    })
  })
})

// Delete a product in basket
app.delete('/product/:id', (req, res) => {
  var db = req.db;
  Product.remove({
    _id: req.params.id
  }, function(err, product){
    if (err)
      res.send(err)
    res.send({
      success: true
    })
  })
})

app.listen(process.env.PORT || 8081)