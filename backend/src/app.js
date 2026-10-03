const express = require('express');
const healthRoutes = require('./routes/health.routes');
const eventsRoutes = require('./routes/events.routes');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const app = express();

app.set('trust proxy', 1)
app.use(helmet());
app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://avivamento-e-restauracao-sjm.vercel.app'
    ]
}));

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 100,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
    message: {
        error: 'Muitas requisições. Tente novamente mais tarde.'
    }
});

app.use('/api', apiLimiter);
app.use(express.json({ limit: '100kb'}));

app.use('/api', healthRoutes);
app.use('/api', eventsRoutes);

app.use((err, req, res, _next) => {
    console.error('Erro:', err);

    if (err.type === 'entity.parse.failed') {
        return res.status(400).json({
            error: 'JSON inválido.'
        });
    }

    return res.status(500).json({
        error: 'Erro interno do servidor.'
    });
});

module.exports = app;