var express = require('express');
var router = express.Router();
const { insertFixRequests, getFixRequests, completeFixRequests, openFixRequests, reprioritizeFixRequests, deleteFixRequest } = require('../controllers/fixControllers')

router.route('/get').post(getFixRequests)
router.route('/new').post(insertFixRequests)
router.route('/set-open').post(openFixRequests)
router.route('/set-complete').post(completeFixRequests)
router.route('/change-priority').post(reprioritizeFixRequests)
router.route('/delete').post(deleteFixRequest)

module.exports = router;
