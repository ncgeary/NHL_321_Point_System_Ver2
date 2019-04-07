const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  Team:{
    type: Object
  }, 
  Wins:{
    type: Object
  },
  Loss:{
    type: Object
  },
  Overtime_Loss:{
    type: Object
  },
  Shoot_Out_Wins: {
    type: Object
  },
  Overtime_Wins: {
    type: Object
  },
  True_Wins: {
    type: Object
  },
  New_Record: {
    type: Object
  },
  Points: {
    type: Object
  },
  Current_Points: {
    type: Object
  },
  Current_Rank: {
    type: Object
  },
  New_Rank: {
    type: Object
  },
  Conference: {
    type: Object
  },
  Division: {
    type: Object
  }
});

module.exports = Item = mongoose.model('data',ItemSchema);