const express = require('express');
const healthRoutes = require('./routes/health.routes');
const eventsRoutes = require('./routes/events.routes');

const app = express();

app.use(express.json());

app.use('/api', healthRoutes);
app.use('/api', eventsRoutes);

module.exports = app