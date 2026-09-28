const eventsService = require('../services/events.service');

const eventsController = {
    getEvents: async (req, res) => {
        try {
            const events = await eventsService.getEvents();
            res.json(events);
        } catch (error) {
            console.error('Erro no getEvents:', error);
            res.status(500).json({ error: 'Erro ao buscar eventos.' });
        }
    },

    createEvent: async (req, res) => {
        try {
            const newEvent = await eventsService.createEvent(req.body);
            res.status(201).json(newEvent);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
};

module.exports = eventsController;