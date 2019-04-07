const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .then(data => res.json(data));
    // .then(items => res.json(items));
});

// // @route   Delete api/items/:id
// // @desc    Delete Items
// // @access  Public
// router.delete('/:id', (req, res) => {
//   Item.findById()(req.params.id)
//     .then(item => item.remove().then(()=>res.json({success:true})))
//     .catch(err => res.status(404).json({
//       success: false
//     }));
// });


module.exports = router;