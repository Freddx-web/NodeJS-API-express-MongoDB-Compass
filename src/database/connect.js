const mongoose = require('mongoose');

require("dotenv").config();

const { db } = require('../model/Schema');



try{

  // Connect Mongoose
  mongoose.connect('mongodb://127.0.0.1:27017/data_base_1', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => console.log('Connected mongodb!'))
    
    } catch (error) {
      //handleError(error);
      console.log("failed connected to database"+error);
    }


