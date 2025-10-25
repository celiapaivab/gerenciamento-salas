const jwt = require('jsonwebtoken');
const { users } = require('../models/userModel');
const { SECRET } = require('../middleware/authMiddleware');

function register(req, res) {
    const { login, password } = req.body;
    if (!login || !password) {
        return res.status(400).json({ message: 'Login e senha obrigatórios' });
    }
    if (users.find(u => u.login === login)) {
        return res.status(400).json({ message: 'Usuário já existe' });
    }
    users.push({ login, password });
    res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
}

function login(req, res) {
    const { login, password } = req.body;
    const user = users.find(u => u.login === login && u.password === password);
    if (!user) {
        return res.status(400).json({ message: 'Credenciais inválidas' });
    }
    const token = jwt.sign({ login }, SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
}

module.exports = { register, login };
