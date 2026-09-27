const eventsService = require('../services/events.service');

const eventsController = {
    getEvents: (req, res) => {
        res.json(eventsService.getEvents());
    }
}; 

module.exports = eventsController;