const API_URL = import.meta.env.VITE_API_URL;

export const getEvents = async () => {
    const response = await fetch(`${API_URL}/events`);

    if (!response.ok) {
        throw new Error('Erro ao buscar eventos.');
    }

    return response.json();
};