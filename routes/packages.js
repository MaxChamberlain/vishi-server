var express = require('express');
var router = express.Router();
const { getPackages } = require('../controllers/packagescontroller')

router.route('/getall').post(getPackages)

module.exports = router;
