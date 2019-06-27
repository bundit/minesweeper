const express = require('express');
const router = express.Router();

// Highscore model
const Highscore = require('../../models/Highscore');

// @route   GET api/highscores
// @desc    Get all highscores
// @access  Public
router.get('/', (req, res) => {
  Highscore.find({})
    .sort({ time: 1 })
    .then(highscores => res.json(highscores));
});

// @route   GET api/highscores/easy
// @desc    Get all easy highscores
// @access  Public
router.get('/easy', (req, res) => {
  Highscore.find({mode: "EASY"})
    .sort({ time: 1 })
    .then(highscores => res.json(highscores));
});

// @route   GET api/highscores/medium
// @desc    Get all medium highscores
// @access  Public
router.get('/medium', (req, res) => {
  Highscore.find({mode: "MEDIUM"})
    .sort({ time: 1 })
    .then(highscores => res.json(highscores));
});

// @route   GET api/highscores/hard
// @desc    Get all hard highscores
// @access  Public
router.get('/hard', (req, res) => {
  Highscore.find({mode: "HARD"})
    .sort({ time: 1 })
    .then(highscores => res.json(highscores));
});


// @route   POST api/highscores
// @desc    Create a highscore
// @access  Public
router.post('/', (req, res) => {
  const newHighscore = new Highscore({
    username: req.body.username,
    time: req.body.time,
    mode: req.body.mode
  });

  newHighscore.save().then(item => res.json(item));
});

// @route   DELETE api/highscores
// @desc    Delete a highscore
// @access  Public
router.delete('/:id', (req, res) => {
  Highscore.findById(req.params.id)
    .then(highscore => Highscore.remove().then(() => res.json({success: true}))
    .catch(err => res.status(404).json({success: false})));
});

module.exports = router;
