const request = require('supertest');
const app = require('../src/app');
const usersRepository = require('../src/repositories/users.repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


describe('Auth API', () => {
  test('POST /api/auth/register - deve cadastrar usuário com sucesso', async () => {
    const userData = {
      first_name: 'Gilberto',
      last_name: 'Albuquerque',
      birth_date: '1995-08-04',
      email: 'gilberto@email.com',
      password: 'SenhaForte123!',
      address_line: 'Rua Exemplo, 123',
      postal_code: '3700-000',
      city: 'São João da Madeira',
      country: 'Portugal'
    };

    usersRepository.findByEmail.mockResolvedValue(null);

    usersRepository.createUser.mockResolvedValue({
      id: 1,
      first_name: 'Gilberto',
      last_name: 'Albuquerque',
      birth_date: '1995-08-04',
      email: 'gilberto@email.com',
      address_line: 'Rua Exemplo, 123',
      postal_code: '3700-000',
      city: 'São João da Madeira',
      country: 'Portugal',
      role: 'membro',
      active: true
    });

    const response = await request(app)
      .post('/api/auth/register')
      .send(userData);

    expect(response.statusCode).toBe(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.email).toBe('gilberto@email.com');
    expect(response.body.role).toBe('membro');

    expect(usersRepository.findByEmail).toHaveBeenCalledWith(
      'gilberto@email.com'
    );

    expect(usersRepository.createUser).toHaveBeenCalledTimes(1);
  });

  test('POST /api/auth/register - deve rejeitar campos obrigatórios ausentes', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'teste@email.com'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');

    expect(usersRepository.createUser).not.toHaveBeenCalled();
  });

  test('POST /api/auth/register - deve rejeitar email já cadastrado', async () => {
    usersRepository.findByEmail.mockResolvedValue({
      id: 1,
      email: 'existente@email.com'
    });

    const response = await request(app)
      .post('/api/auth/register')
      .send({
        first_name: 'João',
        last_name: 'Silva',
        email: 'existente@email.com',
        password: 'SenhaForte123!'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');

    expect(usersRepository.createUser).not.toHaveBeenCalled();
  });

    test('POST /api/auth/login - deve rejeitar senha ausente', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'teste@email.com'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Email e senha são obrigatórios.');
    expect(usersRepository.findByEmail).not.toHaveBeenCalled();
  });

    test('POST /api/auth/login - deve rejeitar email não cadastrado', async () => {
    usersRepository.findByEmail.mockResolvedValue(null);

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'inexistente@email.com',
        password: 'SenhaDeTeste123!'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Email ou senha inválidos.');
    expect(response.body).not.toHaveProperty('token');

    expect(usersRepository.findByEmail).toHaveBeenCalledWith(
      'inexistente@email.com'
    );
  });

    test('POST /api/auth/login - deve rejeitar senha incorreta', async () => {
    const passwordHash = await bcrypt.hash('SenhaCorreta123!', 12);

    usersRepository.findByEmail.mockResolvedValue({
      id: 1,
      email: 'membro@email.com',
      active: true,
      password_hash: passwordHash
    });

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'membro@email.com',
        password: 'SenhaErrada123!'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Email ou senha inválidos.');
    expect(response.body).not.toHaveProperty('token');

    expect(usersRepository.findByEmail).toHaveBeenCalledWith(
      'membro@email.com'
    );
  });

    test('POST /api/auth/login - deve rejeitar usuário desativado', async () => {
    usersRepository.findByEmail.mockResolvedValue({
      id: 1,
      email: 'membro@email.com',
      active: false
    });

    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'membro@email.com',
        password: 'SenhaDeTeste123!'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe('Usuário desativado.');
    expect(response.body).not.toHaveProperty('token');
  });
    
    test('POST /api/auth/login - deve autenticar usuário e gerar token válido', async () => {
    const previousSecret = process.env.JWT_SECRET;
    process.env.JWT_SECRET = 'segredo-ficticio-exclusivo-do-teste';

    try {
      const password = 'SenhaCorreta123!';
      const passwordHash = await bcrypt.hash(password, 12);

      usersRepository.findByEmail.mockResolvedValue({
        id: 1,
        first_name: 'Gilberto',
        last_name: 'Albuquerque',
        email: 'membro@email.com',
        role: 'membro',
        active: true,
        password_hash: passwordHash
      });

      const response = await request(app)
        .post('/api/auth/login')
        .send({
          email: 'membro@email.com',
          password
        });

      expect(response.statusCode).toBe(200);
      expect(response.body.token).toEqual(expect.any(String));

      const payload = jwt.verify(
        response.body.token,
        process.env.JWT_SECRET
      );

      expect(payload.userId).toBe(1);
      expect(payload.role).toBe('membro');
      expect(payload.exp - payload.iat).toBe(3600);

      expect(response.body.user).toEqual({
        id: 1,
        first_name: 'Gilberto',
        last_name: 'Albuquerque',
        email: 'membro@email.com',
        role: 'membro'
      });

      expect(response.body.user).not.toHaveProperty('password_hash');
    } finally {
      if (previousSecret === undefined) {
        delete process.env.JWT_SECRET;
      } else {
        process.env.JWT_SECRET = previousSecret;
      }
    }
  });



});