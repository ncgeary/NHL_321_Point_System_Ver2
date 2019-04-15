const express = require('express');
const router = express.Router();
const cors = require('cors')

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', cors(), (req, res) => {
  Item.find()
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create Items
// @access  Public
router.post('/', cors(), (req, res) => {
  const newItem = new Item({
    team: req.body.team,
    wins: req.body.wins,
    loss: req.body.loss,
    overtime_Loss: req.body.overtime_Loss,
    shoot_Out_Wins: req.body.shoot_Out_Wins,
    overtime_Wins: req.body.overtime_Wins,
    true_Wins: req.body.true_Wins,
    new_Record: req.body.new_Record,
    points: req.body.points,
    current_Points: req.body.current_Points,
    current_Rank: req.body.current_Rank,
    new_Rank: req.body.new_Rank,
    conference: req.body.conference,
    division: req.body.division,
  });
  newItem.save().then(item=> res.json(item));
});

module.exports = router;