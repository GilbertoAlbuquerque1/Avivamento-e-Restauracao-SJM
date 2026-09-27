const eventsRepository = require('../repositories/events.repository');

const eventsService = {
    getEvents: () => {
        return eventsRepository.getEvents();
    }
}

module.exports = eventsService;