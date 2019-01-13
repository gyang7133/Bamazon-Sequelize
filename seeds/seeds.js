// Import Database Models
const db = require("../models");

//Syncing our sequelize models
db.sequelize.sync().then(function () {
  db.Product.bulkCreate([{

  product_name: "Apple EarPods",
  department_name: "Electronics",
  price: 24.00,
  stock_quantity: 100
},
{
  product_name: "Dell - Inspiron 15.6 Laptop Black",
  department_name: "Electronics",
  price: 799.00,
  stock_quantity: 50
},
{
  product_name: "Coding with Javascript for Dummies",
  department_name: "Books",
  price: 18.74,
  stock_quantity: 35
},
{
  product_name: "The Black Witch",
  department_name: "Books",
  price: 7.99,
  stock_quantity: 250
},
{
  product_name: "Biolage Colorlast Shampoo For Color-Treated Hair 33.8 Fl Oz",
  department_name: "Beauty & Health",
  price: 27.00,
  stock_quantity: 40
},
{
  product_name: "Biolage Colorlast Conditioner For Color-Treated Hair 33.8 Fl Oz",
  department_name: "Beauty & Health",
  price: 29.00,
  stock_quantity: 38
},
{
  product_name: "PlayDoh Modeling Compound 10-Pack",
  department_name: "Arts & Crafts Supplies",
  price: 7.98,
  stock_quantity: 10
},
{
  product_name: "Hasbro Scrabble Crossword Game",
  department_name: "Toys & Games",
  price: 14.99,
  stock_quantity: 15
},
{
  product_name: "Nintendo Switch - Neon Red and Neon Blue Joy-Con",
  department_name: "Electronics",
  price: 299.00,
  stock_quantity: 5
},
{
  product_name: "Mario Kart 8 Deluxe - Nintendo Switc",
  department_name: "Toys & Games",
  price: 55.99,
  stock_quantity: 35
}
]).then(function (data) {
  console.log('Data successfully added!');
}).catch(function (error) {
  console.log('Error', error)
});
});