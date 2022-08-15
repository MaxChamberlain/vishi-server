var express = require('express');
var router = express.Router();
const { getPallets, insertPallets } = require('../controllers/palletController')

router.route('/getall').post(getPallets)
router.route('/post').post(insertPallets)

module.exports = router;
 