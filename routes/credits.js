var express = require('express');
var router = express.Router();
const { giveCreditReport } = require('../hostData/credits')

router.route('/getcredituse').get(giveCreditReport)

module.exports = router;
