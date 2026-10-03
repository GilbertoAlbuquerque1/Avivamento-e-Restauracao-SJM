jest.unmock('../src/repositories/events.repository');

jest.mock('../src/config/database', () => ({
    query: jest.fn()
}));

const db = require('../src/config/database');
const eventsRepository = require('../src/repositories/events.repository');

describe('Events Repository', () => {
    test('createEvent deve enviar todos os campos para o banco', async () => {
        const eventData = {
            title: 'Conferência de Jovens',
            description: 'Uma conferência de capacitação e louvor.',
            event_date: '2026-10-15 19:30:00',
            location: 'Templo Principal',
            category: 'Jovens',
            image: 'reencontro',
            featured: true,
            date_label: '15 OUT',
            time_label: '19:30'
        };

        db.query.mockResolvedValue({
            rows: [{ id: 1, ...eventData }]
        });

        await eventsRepository.createEvent(eventData);

        const [query, values] = db.query.mock.calls[0];

        expect(query).toContain('INSERT INTO events');

        expect(values).toEqual([
            'Conferência de Jovens',
            'Uma conferência de capacitação e louvor.',
            '2026-10-15 19:30:00',
            'Templo Principal',
            'Jovens',
            'reencontro',
            true,
            '15 OUT',
            '19:30'
        ]);
    });
});


