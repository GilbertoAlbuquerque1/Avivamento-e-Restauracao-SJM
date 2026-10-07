const express = require('express');
const request = require('supertest');
const authMiddleware = require('../src/middlewares/auth.middleware');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/protected', authMiddleware, (req, res) => {
  res.status(200).json({
    message: 'Acesso permitido.',
    user: req.user
  });
});

describe('Middleware de autenticação', () => {
  test('deve rejeitar requisição sem token', async () => {
    const response = await request(app).get('/protected');

    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe(
      'Token de autenticação não informado.'
    );
  });

  test('deve rejeitar cabeçalho com formato inválido', async () => {
    const response = await request(app)
      .get('/protected')
      .set('Authorization', 'Bearer');

    expect(response.statusCode).toBe(401);
    expect(response.body.error).toBe(
      'Formato de autenticação inválido.'
    );
  });

  test('deve rejeitar token assinado com outro segredo', async () => {
    const previousSecret = process.env.JWT_SECRET;
    process.env.JWT_SECRET = 'segredo-ficticio-do-servidor';

    try {
      const token = jwt.sign(
        { userId: 1, role: 'membro' },
        'outro-segredo-ficticio',
        { algorithm: 'HS256', expiresIn: '1h' }
      );

      const response = await request(app)
        .get('/protected')
        .set('Authorization', `Bearer ${token}`);

      expect(response.statusCode).toBe(401);
      expect(response.body.error).toBe(
        'Token inválido ou expirado.'
      );
    } finally {
      if (previousSecret === undefined) {
        delete process.env.JWT_SECRET;
      } else {
        process.env.JWT_SECRET = previousSecret;
      }
    }
  });

  test('deve rejeitar token expirado', async () => {
    const previousSecret = process.env.JWT_SECRET;
    process.env.JWT_SECRET = 'segredo-ficticio-do-servidor';

    try {
      const token = jwt.sign(
        { userId: 1, role: 'membro' },
        process.env.JWT_SECRET,
        { algorithm: 'HS256', expiresIn: -1 }
      );

      const response = await request(app)
        .get('/protected')
        .set('Authorization', `Bearer ${token}`);

      expect(response.statusCode).toBe(401);
      expect(response.body.error).toBe(
        'Token inválido ou expirado.'
      );
    } finally {
      if (previousSecret === undefined) {
        delete process.env.JWT_SECRET;
      } else {
        process.env.JWT_SECRET = previousSecret;
      }
    }
  });

  test('deve permitir acesso com token válido', async () => {
    const previousSecret = process.env.JWT_SECRET;
    process.env.JWT_SECRET = 'segredo-ficticio-do-servidor';

    try {
      const token = jwt.sign(
        { userId: 1, role: 'membro' },
        process.env.JWT_SECRET,
        { algorithm: 'HS256', expiresIn: '1h' }
      );

      const response = await request(app)
        .get('/protected')
        .set('Authorization', `Bearer ${token}`);

      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('Acesso permitido.');
      expect(response.body.user).toEqual({
        id: 1,
        role: 'membro'
      });
    } finally {
      if (previousSecret === undefined) {
        delete process.env.JWT_SECRET;
      } else {
        process.env.JWT_SECRET = previousSecret;
      }
    }
  });
});