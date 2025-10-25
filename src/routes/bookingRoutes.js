const express = require('express');
const router = express.Router();
const { bookRoom, cancelBooking } = require('../controllers/bookingController');

router.post('/', bookRoom);
router.delete('/:id', cancelBooking);

module.exports = router;
