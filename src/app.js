// Using Node.js `require()`
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan')
const cors = require('cors');

/*
try{
// Connect Mongoose
mongoose.connect('mongodb://127.0.0.1:27017/data_base_1', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
})
  .then(() => console.log('Connected!'));
  
} catch (error) {
  //handleError(error);
  console.log("failed connected to database"+error);
} */



const app = express();

app.use(cors());
// Settings
app.set("port", 4000);
 
// Middlewares
app.use(morgan("dev"));
app.use(express.json());

require('./database/connect.js');

/*
  // Schema
  const UserSchema = new mongoose.Schema({
    name: String,
    email: String
  })
  
  
  // Import Schema
  const MyModel = mongoose.model('users', UserSchema); */
  


  module.exports = app;