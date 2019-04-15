const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  team:{
    type: Object
  }, 
  wins:{
    type: Object
  },
  loss:{
    type: Object
  },
  overtime_Loss:{
    type: Object
  },
  shoot_Out_Wins: {
    type: Object
  },
  overtime_Wins: {
    type: Object
  },
  true_Wins: {
    type: Object
  },
  new_Record: {
    type: Object
  },
  points: {
    type: Object
  },
  current_Points: {
    type: Object
  },
  current_Rank: {
    type: Object
  },
  new_Rank: {
    type: Object
  },
  conference: {
    type: Object
  },
  division: {
    type: Object
  }
}, {
  versionKey: '_2018data'
});

module.exports = Item = mongoose.model('data',ItemSchema);