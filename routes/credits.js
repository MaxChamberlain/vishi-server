var express = require('express');
var router = express.Router();
const { giveCreditReport, changeCredits } = require('../hostData/credits')

router.route('/getcredituse').get(giveCreditReport)
router.route('/change').post(changeCredits)

module.exports = router;
