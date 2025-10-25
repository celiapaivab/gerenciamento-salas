
const { rooms } = require('../models/roomModel');

function listRooms(req, res) {
    res.status(200).json(rooms);
}

function createRoom(req, res) {
    const { name, description } = req.body;
    if (!name) {
        return res.status(400).json({ message: 'Nome da sala é obrigatório' });
    }
    const exists = rooms.find(r => r.name === name);
    if (exists) {
        return res.status(400).json({ message: 'Já existe uma sala com esse nome' });
    }
    const room = {
        id: rooms.length ? rooms[rooms.length - 1].id + 1 : 1,
        name,
        description: description || ''
    };
    rooms.push(room);
    res.status(200).json({ message: 'Sala cadastrada com sucesso', room });
}

module.exports = { listRooms, createRoom };
