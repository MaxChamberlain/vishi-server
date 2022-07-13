var express = require('express');
var router = express.Router();
const { getItemRequests } = require('../controllers/snapshotController')

router.route('/items').post(getItemRequests)

module.exports = router;
