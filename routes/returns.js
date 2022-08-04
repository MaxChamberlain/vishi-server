var express = require('express');
var router = express.Router();
const { insertReturn, processReturn } = require('../controllers/returnsController')

router.route('/insert').post(insertReturn)
router.route('/process').post(processReturn)

module.exports = router;
