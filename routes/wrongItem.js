var express = require('express');
var router = express.Router();
const { getCounts, insertCount } = require('../controllers/wrongItemCountControllers')

router.route('/getall').post(getCounts)
router.route('/new').post(insertCount)

module.exports = router;
