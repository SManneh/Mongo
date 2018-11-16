const express = require('express');
const mongoose = require('mongoose');
const db = require("./models")

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


mongoose.connect('mongodb://localhost/kudos', { useNewUrlParser: true });


require('./routes/apiRoutes')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
  
  // db.kudos.create({
  //   sender:"Nabou",
  //   reciever:"Ruth",
  //   title:"music",
  //   body:"so you gon hook a sister up with some vinyls or nah?"
   
  //  }).then(function(response){

  //  });

// db.user.create({
//   name:"Nabou"
// }).then(function(response){
  
// })

// db.user.create({
//   name:"Ruth"
// }).then(function(response){
 
// })

// db.user.create({
//   name:"Lori"
// }).then(function(response){
  
// })

// db.user.create({
//   name:"Abdul"
// }).then(function(response){
  
// })

});