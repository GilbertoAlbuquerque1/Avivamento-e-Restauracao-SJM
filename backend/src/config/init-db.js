const db = require('./database');

async function initDb() {
  try {
    console.log('⏳ Conectando e criando a tabela events...');

    await db.query(`
      CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(150) NOT NULL,
        description TEXT,
        event_date TIMESTAMP NOT NULL,
        location VARCHAR(200) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log('✅ Tabela events criada com sucesso, sem inserir eventos de exemplo!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro ao inicializar o banco de dados:', error);
    process.exit(1);
  }
}

initDb();
