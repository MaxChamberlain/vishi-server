var express = require('express');
var router = express.Router();
const { insertReturn, processReturn, getAll } = require('../controllers/returnsController')

router.route('/insert').post(insertReturn)
router.route('/process').post(processReturn)
router.route('/getall').post(getAll)

module.exports = router;
