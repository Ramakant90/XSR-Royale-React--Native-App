 
const express = require('express');
const router = express.Router();
const { sendPing, getNotifications } = require('../controllers/xsrPingController');

router.post('/ping', sendPing);
router.get('/notifications/:user_id', getNotifications);

module.exports = router;
