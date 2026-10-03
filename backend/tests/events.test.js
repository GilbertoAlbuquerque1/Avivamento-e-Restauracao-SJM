// Substitui a persistência antes de carregar app/repository: nenhum Pool real é criado.
jest.mock('../src/config/database', () => ({ query: jest.fn() }));

const request = require('supertest');
const app = require('../src/app');
const db = require('../src/config/database');

describe('API de Eventos', () => {
    beforeEach(() => {
        db.query.mockReset();
    });

    test('GET /api/events - deve retornar a lista de eventos', async () => {
        const events = [{ id: 1, title: 'Evento de teste' }];
        db.query.mockResolvedValue({ rows: events });
        const response = await request(app).get('/api/events');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(events);
        expect(db.query).toHaveBeenCalledWith('SELECT * FROM events ORDER BY event_date ASC');
    });

    test('POST /api/events - deve criar um novo evento com sucesso', async () => {
        const newEventData = {
            title: 'Conferência de Jovens',
            description: 'Uma conferência de capacitação e louvor.',
            event_date: '2026-10-15 19:30:00',
            location: 'Templo Principal'
        };
        db.query.mockResolvedValue({ rows: [{ id: 1, ...newEventData }] });

        const response = await request(app)
            .post('/api/events')
            .send(newEventData);

        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('id');
        expect(response.body.title).toBe('Conferência de Jovens');
        expect(db.query).toHaveBeenCalledTimes(1);
        expect(db.query).toHaveBeenCalledWith(
            expect.stringContaining('INSERT INTO events'),
            [newEventData.title, newEventData.description, newEventData.event_date, newEventData.location]
        );
    });

    test('POST /api/events - deve retornar 400 se faltar campo obrigatório', async () => {
        const invalidData = {
            description: 'Sem título e sem data'
        };

        const response = await request(app)
            .post('/api/events')
            .send(invalidData);

        expect(response.statusCode).toBe(400);
        expect(response.body).toHaveProperty('error');
        expect(db.query).not.toHaveBeenCalled();
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
        expect(response.body).toHaveProperty('error')
        expect(db.query).not.toHaveBeenCalled();
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
        expect(response.body).toHaveProperty('error')
        expect(db.query).not.toHaveBeenCalled();
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
    expect(response.body).toHaveProperty('error');
    expect(db.query).not.toHaveBeenCalled();
});
});
