const express = require('express');
const router = express.Router();

const { listRooms, createRoom } = require('../controllers/roomController');

router.get('/', listRooms);

router.post('/', createRoom);

module.exports = router;
