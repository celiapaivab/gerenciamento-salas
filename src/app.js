const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const { authenticateJWT } = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

// Swagger
const swaggerDocument = JSON.parse(fs.readFileSync(path.join(__dirname, '../recursos/swagger.json')));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas
app.use('/auth', authRoutes);
app.use('/rooms', authenticateJWT, roomRoutes);
app.use('/bookings', authenticateJWT, bookingRoutes);

app.get('/', (req, res) => res.send('API de Gerenciamento de Salas'));

module.exports = app;
