const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const highscores = require('./routes/api/highscores');

const app = express();

// bodyParser
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('Mongodb Connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/api/highscores', highscores);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile()path.resolve(__dirname, 'client', 'build', 'index.html');
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
