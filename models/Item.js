const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  Team:{
    type: String
  }, 
  Wins:{
    type: Number
  },
  Loss:{
    type: Number
  },
  Overtime_Loss:{
    type: Number
  },
  Shoot_Out_Wins: {
    type: Number
  },
  Overtime_Wins: {
    type: Number
  },
  True_Wins: {
    type: Number
  },
  New_Record: {
    type: String
  },
  Points: {
    type: Number
  },
  Current_Points: {
    type: Number
  },
  Current_Rank: {
    type: Number
  },
  New_Rank: {
    type: Number
  }
});

module.exports = Item = mongoose.model('item',ItemSchema)