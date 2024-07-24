const express = require('express');
const router = express.Router();
const pesananController = require('../controllers/pesananController');
const auth = require('../middleware/authMiddleware');

router.post('/', auth('Pembeli'), pesananController.addPesanan);
router.get('/:id', auth(), pesananController.getPesananById);

module.exports = router;
