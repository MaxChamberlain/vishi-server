var express = require('express');
var router = express.Router();
const { getOrders, insertOrder, updateOrder, addNote, removeNote } = require('../controllers/csOrderControllers')

router.route('/getall').post(getOrders)
router.route('/new').post(insertOrder)
router.route('/update').post(updateOrder)
router.route('/addnote').post(addNote)
router.route('/removenote').post(removeNote)

module.exports = router;
