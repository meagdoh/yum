var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yum');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
var Schema = mongoose.Schema

//Define Schema
var MenuSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address:
  { 'street': String, 'zipcode': Number},
  yelpUrl: String,
  menus: [MenuSchema]
});



//Define Models
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);
var Menu = mongoose.model("Menu", MenuSchema);

//'module.exports'
module.exports = {
  Restaurant: Restaurant,
  Menu: Menu
};
