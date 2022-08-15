var express = require('express');
var router = express.Router();
const { getPallets } = require('../controllers/palletController')

router.route('/getall').post(getPallets)

module.exports = router;
