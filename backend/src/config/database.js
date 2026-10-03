if (process.env.NODE_ENV === 'test' || process.env.JEST_WORKER_ID !== undefined) {
  throw new Error('Conexão real com o banco bloqueada nos testes. Use um mock do repository.');
}

const { Pool } = require('pg');
require('dotenv').config({ quiet: true });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  end: () => pool.end(),
};
