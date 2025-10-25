const jwt = require('jsonwebtoken');
const SECRET = 'supersegredo';

function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, SECRET, (err, user) => {
            if (err) {
                return res.status(400).json({ message: 'Token inválido' });
            }
            req.user = user;
            next();
        });
    } else {
        res.status(400).json({ message: 'Token não fornecido' });
    }
}

module.exports = { authenticateJWT, SECRET };
