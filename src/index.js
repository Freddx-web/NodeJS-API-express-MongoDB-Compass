const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 9000;
// Routes
app.get("/", (req, res) =>{
	res.send('Welcome to mi API');
});
//Mongoose Connect
mongoose

    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connect to MongoDB Atlas"))
    .catch((error) => console.error(error));

// Server
app.listen(port, () => console.log('server listening on part', port));
