var express = require('express');
var router = express.Router();
const { getCompanies, insertCompany, getCompany } = require('../controllers/companyControllers')

router.route('/getall').post(getCompanies)
router.route('/getone').post(getCompany)
router.route('/new').post(insertCompany)

module.exports = router;
