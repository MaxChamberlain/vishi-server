var express = require('express');
var router = express.Router();
const { getItemRequests, getbyupc } = require('../controllers/snapshotController')

router.route('/items').post(getItemRequests)
router.route('/getbyupc').post(getbyupc)

module.exports = router;
