var express = require('express');
var router = express.Router();
const { registerUser, authUser, getUserRoles, getUsersInCompany, approveUser, denyUser, updateRoles, setUserVersion } = require('../controllers/userControllers')

router.route('/roles').post(getUserRoles)
router.route('/manage').post(getUsersInCompany)
router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/approve').post(approveUser)
router.route('/deny').post(denyUser)
router.route('/changeroles').post(updateRoles)
router.route('/updateversion').post(setUserVersion)

module.exports = router;
