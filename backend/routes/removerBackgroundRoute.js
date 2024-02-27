const express = require('express');
const router = express.Router();
const removeBackgroundController = require('../controllers/removeBackgroundController');

router.post('/', removeBackgroundController.removeBackground);

module.exports = router;