var Schema = require("./schema.js");

var Restaurant = Schema.Restaurant
var Menu = Schema.Menu


// First we clear the database of existing restaurants and menus.
Restaurant.remove({}, err => {
  if(err){
    console.log(err)
  }
});

Menu.remove({}, err => {
  if(err){
    console.log(err)
  }
});


var cookies = new Restaurant ({"name": "Cookies Corner", "address": {"street" : "1970 2nd St NW", "zipcode" : 20001},"yelp": "http://www.yelp.com/biz/cookies-corner-washington"})
var cafe = new Restaurant ({"name": "The Blind Dog Cafe", "address": {"street": "944 Florida Ave", "zipcode": 20001},"yelp": "http://www.yelp.com/biz/the-blind-dog-cafe-washington-2?osq=cookies"})
var beer = new Restaurant ({"name": "Birch & Barley","address": {"street": "1337 14th St NW","zipcode": 20005},"yelp": "http://www.yelp.com/biz/birch-and-barley-washington?osq=Restaurants+cookies"})

var menu1 = new Menu ({title: "Grilled Cheese"})
var menu2 = new Menu ({title: "Chocolate Chip Cookie"})
var menu3 = new Menu ({title: "Kale Salad"})

var restaurants = [cookies, cafe, beer]
var menus = [menu1, menu2, menu3]

// Here we assign some projects to each student.
for(var i = 0; i < restaurants.length; i++){
  restaurants[i].menus.push(menus[i], menus[i+1])
  restaurants[i].save((err, restaurant) => {
    if (err){
      console.log(err)
    } else {
      console.log(restaurant);
    }
  })
};
