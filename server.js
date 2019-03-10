const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('../NHL_321_Point_System_Ver2/config/keys').mongoURI;

//Connect to Mongo
mongoose
  .connect(db, {useNewUrlParser: true}) // Adding new mongo url parser 
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

//Use Routes
app.use('/api/items',items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));