CREATE TABLE IF NOT EXISTS events (
    id SERIAL PRIMARY KEY,
    title VARCHAR(150) NOT NULL,
    description TEXT,
    event_date TIMESTAMP NOT NULL,
    location VARCHAR(200) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO events (title, description, event_date, location) VALUES 
('Encontro com Deus', 'Um encontro com Deus para renovar as forças e a fé.', '2025-12-31 19:00:00', 'Auditório da SJM'),
('Culto de Celebração', 'Um culto de celebração para começar o ano com Deus.', '2026-01-01 19:00:00', 'Igreja');