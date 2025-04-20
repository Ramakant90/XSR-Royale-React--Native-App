const express = require('express');
const router = express.Router();
const { uploadVideo, getAllVideos } = require('../controllers/videoController');

router.post('/upload', uploadVideo);
router.get('/', getAllVideos);

module.exports = router;

