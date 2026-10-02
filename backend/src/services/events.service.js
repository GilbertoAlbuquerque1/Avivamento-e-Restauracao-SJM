const eventsRepository = require('../repositories/events.repository');
const ValidationError = require('../errors/ValidationError');

const eventsService = {
    getEvents: async () => {
        const result = await eventsRepository.getEvents();
        return result;
    },

createEvent: async (eventData) => {
    const trimmedData = {
        title: eventData?.title?.trim(),
        description: eventData?.description?.trim(),
        event_date: eventData?.event_date?.trim(),
        location: eventData?.location?.trim()
    };

    if (!trimmedData.title || !trimmedData.event_date || !trimmedData.location) {
        throw new ValidationError('Título, data e local são campos obrigatórios.');
    }

    const eventDate = new Date(trimmedData.event_date);

    if (Number.isNaN(eventDate.getTime())) {
        throw new ValidationError('Data do evento inválida.');
    }

    if (trimmedData.title.length > 150) {
        throw new ValidationError('O título deve ter no máximo 150 caracteres.');
    }

    if (trimmedData.location.length > 200) {
        throw new ValidationError('O local deve ter no máximo 200 caracteres.');
    }

    const newEvent = await eventsRepository.createEvent(trimmedData);
    return newEvent;
}
};

module.exports = eventsService;