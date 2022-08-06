var express = require('express');
var router = express.Router();
const { getItemRequests, insertItemRequest, markItemAsSeen, markItemAsComplete, markItemAsUnfound, deleteItem, insertNote, markItemAsCleared, getItemRequestsByDate } = require('../controllers/requestControllers')

router.route('/items').post(getItemRequests)
router.route('/mark-seen').post(markItemAsSeen)
router.route('/mark-complete').post(markItemAsComplete)
router.route('/mark-unfound').post(markItemAsUnfound)
router.route('/delete').post(deleteItem)
router.route('/clear').post(markItemAsCleared)
router.route('/new').post(insertItemRequest)
router.route('/note').post(insertNote)
router.route('/getbydate').post(getItemRequestsByDate)

module.exports = router;
