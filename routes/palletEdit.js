const Express = require('express');
const router = Express.Router();

const { getEditStatus, createEditStatus, updateEditStatus } = require('../controllers/palletEditController');

router.post('/get', getEditStatus);
router.post('/new', createEditStatus);
router.post('/update', updateEditStatus);

module.exports = router;