const request = require('supertest');
const app = require('../src/app');

describe('GET /api/events', ()=>{
    test('deve retornar a lista de eventos', async () => {
        const response = await request(app).get('/api/events');

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveLength(2);
        expect(response.body[0].title).toBe('Encontro com Deus');       
    });
});