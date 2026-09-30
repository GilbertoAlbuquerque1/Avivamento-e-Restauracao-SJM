const API_URL = 'http://localhost:3000/api';

export const getEvents = async () => {
    const response = await fetch(`${API_URL}/events`);

    if (!response.ok) {
        throw new Error('Erro ao buscar eventos.');
    }

    return response.json();
};