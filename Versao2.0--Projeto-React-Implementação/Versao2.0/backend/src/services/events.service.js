const eventsRepository = require('../repositories/events.repository');

const eventsService = {
    getEvents: async () => {
        const result = await eventsRepository.getEvents();
        return result;
    },

    createEvent: async (eventData) => {
        if (!eventData || !eventData.title || !eventData.event_date || !eventData.location) {
            throw new Error('Título, data e local são campos obrigatórios.');
        }

        const newEvent = await eventsRepository.createEvent(eventData);
        return newEvent;
    }
};

module.exports = eventsService;