const { bookings } = require('../models/bookingModel');
const { rooms } = require('../models/roomModel');

function bookRoom(req, res) {
    const { roomId, start, end, name, description } = req.body;
    if (!roomId || !start || !end || !name) {
        return res.status(400).json({ message: 'Dados obrigatórios faltando' });
    }
    const room = rooms.find(r => r.id === roomId);
    if (!room) {
        return res.status(400).json({ message: 'Sala não encontrada' });
    }
    const startDate = new Date(start);
    const endDate = new Date(end);
    if (isNaN(startDate) || isNaN(endDate) || startDate >= endDate) {
        return res.status(400).json({ message: 'Data/hora inválida' });
    }
    const conflict = bookings.find(b => b.roomId === roomId && (
        (startDate < new Date(b.end) && endDate > new Date(b.start))
    ));
    if (conflict) {
        return res.status(400).json({ message: 'Sala não está disponível para uso' });
    }
    const booking = {
        id: bookings.length + 1,
        roomId,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
        name,
        description: description || '',
        user: req.user.login
    };
    bookings.push(booking);
    res.status(200).json({ message: 'Agendamento realizado com sucesso', booking });
}

function cancelBooking(req, res) {
    const id = parseInt(req.params.id);
    const idx = bookings.findIndex(b => b.id === id);
    if (idx === -1) {
        return res.status(400).json({ message: 'Agendamento não encontrado' });
    }
    // Só o usuário que criou pode cancelar
    if (bookings[idx].user !== req.user.login) {
        return res.status(400).json({ message: 'Sem permissão para cancelar este agendamento' });
    }
    bookings.splice(idx, 1);
    res.status(200).json({ message: 'Cancelamento realizado com sucesso' });
}

module.exports = { bookRoom, cancelBooking };
