const db = require('../config/database');

const usersRepository = {
  findByEmail: async (email) => {
    const query = `
      SELECT *
      FROM users
      WHERE email = $1
      LIMIT 1;
    `;

    const result = await db.query(query, [email]);

    return result.rows[0] || null;
  },

  createUser: async (userData) => {
   const {
    first_name,
    last_name,
    birth_date,
    email,
    password_hash,
    address_line,
    postal_code,
    city,
    country,
    role
  } = userData;

    const query = `
      INSERT INTO users (
      first_name,
      last_name,
      birth_date,
      email,
      password_hash,
      address_line,
      postal_code,
      city,
      country,
      role
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING
      id,
      first_name,
      last_name,
      birth_date,
      email,
      address_line,
      postal_code,
      city,
      country,
      role,
      active,
      created_at
`;

    const values = [
      first_name,
      last_name,
      birth_date,
      email,
      password_hash,
      address_line,
      postal_code,
      city,
      country,
      role
    ];

    const result = await db.query(query, values);

    return result.rows[0];
  }
};

module.exports = usersRepository;