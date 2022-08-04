var express = require('express');
var router = express.Router();
const { insertReturn } = require('../controllers/returnsController')

router.route('/insert').post(insertReturn)

module.exports = router;
