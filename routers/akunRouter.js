const express = require('express');
const router = express.Router();
const akunController = require('../controllers/akunController');
const auth = require('../middleware/authMiddleware');

router.post('/register', akunController.register);
router.post('/login', akunController.login);
router.get('/:id', auth(), akunController.getAkunById);

module.exports = router;
