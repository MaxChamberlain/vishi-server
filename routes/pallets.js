var express = require('express');
var router = express.Router();
const { getPallets } = require('../controllers/palletController')

router.route('/getall').post(getCompanies)

module.exports = router;
