const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    // .then(data => res.json(data));
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create Items
// @access  Public
router.post('/', (req, res) => {
  const newItem = new Item({
    Team: req.body.Team,
    Wins: req.body.Wins,
    Loss: req.body.Loss,
    Overtime_Loss: req.body.Overtime_Loss,
    Shoot_Out_Wins: req.body.Shoot_Out_Wins,
    Overtime_Wins: req.body.Overtime_Wins,
    True_Wins: req.body.True_Wins,
    New_Record: req.body.New_Record,
    Points: req.body.Points,
    Current_Points: req.body.Current_Points,
    Current_Rank: req.body.Current_Rank,
    New_Rank: req.body.New_Rank,
    Conference: req.body.Conference,
    Division: req.body.Division,
  });
  newItem.save().then(item=> res.json(item));
});

module.exports = router;