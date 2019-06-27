const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const HighscoreSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  mode: {
    type: String,
    required: true
  }
});

module.exports = Highscore = mongoose.model('highscore', HighscoreSchema);
