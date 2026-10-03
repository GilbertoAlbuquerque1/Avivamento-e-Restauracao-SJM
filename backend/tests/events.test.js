const request = require('supertest');
const app = require('../src/app');
const eventsRepository = require('../src/repositories/events.repository');

describe('API de Eventos', () => {
    test('GET /api/events - deve retornar a lista de eventos', async () => {
        const events = [{ id: 1, title: 'Culto de Celebração' }];
        eventsRepository.getEvents.mockResolvedValue(events);

        const response = await request(app).get('/api/events');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body).toEqual(events);
        expect(eventsRepository.getEvents).toHaveBeenCalledTimes(1);
    });

    test('POST /api/events - deve criar um novo evento com sucesso', async () => {
        const newEventData = {
            title: 'Conferência de Jovens',
            description: 'Uma conferência de capacitação e louvor.',
            event_date: '2026-10-15 19:30:00',
            location: 'Templo Principal',
            category: 'Jovens',
            image:'reencontro',
            featured: true,
            date_label: '15 OUT',
            time_label: '19:30'
        };

        eventsRepository.createEvent.mockResolvedValue({ id: 1, ...newEventData });

        const response = await request(app)
            .post('/api/events')
            .send(newEventData);

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Conferência de Jovens');
        expect(eventsRepository.createEvent).toHaveBeenCalledTimes(1);
        expect(eventsRepository.createEvent).toHaveBeenCalledWith(newEventData);
    });

    test('POST /api/events - deve retornar 400 se faltar campo obrigatório', async () => {
        const invalidData = {
            description: 'Sem título e sem data'
        };

        const response = await request(app)
            .post('/api/events')
            .send(invalidData);

        expect(response.statusCode).toBe(400);
        expect(eventsRepository.createEvent).not.toHaveBeenCalled();
        expect(response.body).toHaveProperty('error');
    });

    test('POST /api/events - deve rejeitar campos vazios', async () =>{
        const invalidData = {
            title: ' ',
            description: 'Evento inválido',
            event_date: ' ',
            location: ' ',
        };
    
        const response = await request(app)
        .post('/api/events')
        .send(invalidData)

        expect(response.statusCode).toBe(400);
        expect(eventsRepository.createEvent).not.toHaveBeenCalled();
        expect(response.body).toHaveProperty('error')
    });

    test('POST /api/events - deve rejeitar título muito longo', async () => {
        const invalidData = {
            title: 'A'.repeat(151),
            description: 'Evento inválido',
            event_date: '2026-10-15 19:30:00',
            location: 'Templo Principal'
        };

        const response = await request(app)
            .post('/api/events')
            .send(invalidData);

        expect(response.statusCode).toBe(400);
        expect(eventsRepository.createEvent).not.toHaveBeenCalled();
        expect(response.body).toHaveProperty('error')
    });

    test('POST /api/events - deve rejeitar data inválida', async () => {
    const invalidData = {
        title: 'Evento com data inválida',
        description: 'Teste de validação',
        event_date: 'data-invalida',
        location: 'Templo Principal'
    };

    const response = await request(app)
        .post('/api/events')
        .send(invalidData);

    expect(response.statusCode).toBe(400);
    expect(eventsRepository.createEvent).not.toHaveBeenCalled();
    expect(response.body).toHaveProperty('error');
});
});
