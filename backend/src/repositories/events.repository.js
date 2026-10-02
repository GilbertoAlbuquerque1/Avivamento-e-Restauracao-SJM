const db = require('../config/database');

const eventsRepository = {
    getEvents: async () => {
        const query = 'SELECT * FROM events ORDER BY event_date ASC';
        const result = await db.query(query);
        return result.rows;
    },

    createEvent: async (eventData) => {
        const { title, description, event_date, location } = eventData;
        const query = `
            INSERT INTO events (title, description, event_date, location)
            VALUES ($1, $2, $3, $4)
            RETURNING *;
        `;
        const values = [title, description, event_date, location];
        const result = await db.query(query, values);
        return result.rows[0];
    }
};

module.exports = eventsRepository;