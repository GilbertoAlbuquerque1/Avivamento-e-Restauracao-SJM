const eventsService = require('../services/events.service');
const ValidationError = require('../errors/ValidationError');

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
            const result = await eventsService.createEvent(req.body);
            return res.status(201).json(result);
        } catch (error) {
    if (error instanceof ValidationError) {
        return res.status(400).json({
            error: error.message
        });
    }

    console.error('Erro no createEvent:', error);

    return res.status(500).json({
        error: 'Erro interno do servidor.'
    });
}
    }
};

module.exports = eventsController;