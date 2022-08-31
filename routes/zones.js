var express = require('express');
var router = express.Router();
const { getAll } = require('../controllers/zoneController')

router.route('/getall').post(getAll)


module.exports = router;
