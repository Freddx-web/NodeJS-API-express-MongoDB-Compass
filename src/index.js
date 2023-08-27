
//import  from 
import app from './app';
import { connectDB } from './database/connect.js'

async function main() {
  try {
    // Connect MongonDB
    await connectDB();
    //Server
    app.listen(app.get('port'),() => {
      console.log(`URL: http://localhost:${app.get('port')}/api`);
    });

  } catch (error) {
    console.error(error);
  }
};

main();


