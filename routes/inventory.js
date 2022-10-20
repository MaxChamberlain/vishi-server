var express = require('express');
var router = express.Router();
const { getItemRequests, getbyupc, addItem } = require('../controllers/snapshotController')

router.route('/items').post(getItemRequests)
router.route('/getbyupc').post(getbyupc)
router.route('/add_item').post(addItem)

module.exports = router;
