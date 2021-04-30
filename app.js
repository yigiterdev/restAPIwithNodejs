const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

//Middlewares
app.use(bodyParser.json());
app.use(cors());
//app.use(auth);
const postsRoute = require('./posts/posts');
app.use('/posts', postsRoute);
//ROUTES
app.get('/', (req, res) => {
  res.send('We are on home');
});

//Connect To DB

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to DB');
  }
);
//How to we start listening to server
app.listen(3000);
