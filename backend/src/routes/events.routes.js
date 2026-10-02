const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/events.controller');

router.get('/events', eventsController.getEvents);
router.post('/events', eventsController.createEvent);

module.exports = router;