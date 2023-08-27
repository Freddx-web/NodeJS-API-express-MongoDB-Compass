import { connect } from 'mongoose';
//import { config } from "dotenv";
//import { MONGODB_URI } from "../config.js";

//config();

export const connectDB = async () => {
  try {
    // Connect Mongoose
    await connect( "mongodb://127.0.0.1:27017/data_base_1", {
      // useUnifiedTopology: true,
      // useNewUrlParser: true,
      // useCreateIndex: true,
    })
    .then(() => console.log('Connected mongodb!'))
    
  } catch (error) {
      //handleError(error);
      console.log("failed connected to database" + error);
  }
};
