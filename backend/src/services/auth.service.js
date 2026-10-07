const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const usersRepository = require('../repositories/users.repository');
const ValidationError = require('../errors/ValidationError');

const authService = {
  register: async (userData) => {
    const {
      first_name,
      last_name,
      birth_date,
      email,
      password,
      address_line,
      postal_code,
      city,
      country
    } = userData;

    const normalizedData = {
      first_name: first_name?.trim(),
      last_name: last_name?.trim(),
      birth_date,
      email: email?.trim().toLowerCase(),
      password,
      address_line: address_line?.trim(),
      postal_code: postal_code?.trim(),
      city: city?.trim(),
      country: country?.trim() || 'Portugal'
    };

    if (
      !normalizedData.first_name ||
      !normalizedData.last_name ||
      !normalizedData.email ||
      !normalizedData.password
    ) {
      throw new ValidationError(
        'Nome, sobrenome, email e senha são obrigatórios.'
      );
    }

    const existingUser = await usersRepository.findByEmail(
      normalizedData.email
    );

    if (existingUser) {
      throw new ValidationError(
        'Já existe um usuário cadastrado com este email.'
      );
    }

    const password_hash = await bcrypt.hash(
      normalizedData.password,
      12
    );

    return usersRepository.createUser({
      first_name: normalizedData.first_name,
      last_name: normalizedData.last_name,
      birth_date: normalizedData.birth_date,
      email: normalizedData.email,
      password_hash,
      address_line: normalizedData.address_line,
      postal_code: normalizedData.postal_code,
      city: normalizedData.city,
      country: normalizedData.country,
      role: 'membro'
    });
  },

  login: async (loginData = {}) => {
    const email = loginData.email?.trim().toLowerCase();
    const password = loginData.password;

    if (!email || !password) {
      throw new ValidationError(
        'Email e senha são obrigatórios.'
    );
  }

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new ValidationError(
        'Email ou senha inválidos.'
      );
    }

    if (!user.active) {
      throw new ValidationError(
        'Usuário desativado.'
      );
    }

    const passwordMatches = await bcrypt.compare(
      password,
      user.password_hash
    );

    if (!passwordMatches) {
      throw new ValidationError(
        'Email ou senha inválidos.'
    );
  }

    const token = jwt.sign(
      {
        userId: user.id,
        role: user.role
      },
      process.env.JWT_SECRET,
      {
        expiresIn: '1h'
      }
    );

    return {
      token,
      user: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role
      }
    };
  }
};

module.exports = authService;