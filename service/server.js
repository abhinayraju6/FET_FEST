// server.js

const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

const config = require('./config/database');

const UserRoute = require('./routes/userRoute');
const BlogRoute = require('./routes/blogRoute');
const EventRoute = require('./routes/eventRoute');
const TeamRoute = require('./routes/teamRoute');

mongoose.connect(config.database, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', UserRoute);
app.use('/blog', BlogRoute);
app.use('/event', EventRoute);
app.use('/team', TeamRoute);


app.listen(PORT, () => {
  console.log('Server is running on PORT:',PORT);
});