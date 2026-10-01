const express = require('express');
const router = express.Router();
const pedagogicalContentController = require('../controller/Admin/pedagogicalContentController');

router.get('/chapters', pedagogicalContentController.getAllChapters);
router.post('/chapters', pedagogicalContentController.addChapter);
router.put('/chapters/:id', pedagogicalContentController.updateChapter);
router.delete('/chapters/:id', pedagogicalContentController.deleteChapter);

module.exports = router;