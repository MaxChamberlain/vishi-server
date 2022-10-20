var express = require('express');
var router = express.Router();
const { getItemRequests, getbyupc, addItem, updateItem } = require('../controllers/snapshotController')

router.route('/items').post(getItemRequests)
router.route('/getbyupc').post(getbyupc)
router.route('/add_item').post(addItem)
router.route('/update_item').post(updateItem)

module.exports = router;
