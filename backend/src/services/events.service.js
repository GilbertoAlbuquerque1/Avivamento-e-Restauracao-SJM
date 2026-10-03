const eventsRepository = require('../repositories/events.repository');
const ValidationError = require('../errors/ValidationError');

const eventsService = {
    getEvents: async () => {
        const result = await eventsRepository.getEvents();
        return result;
    },

    createEvent: async (eventData) => {
        const trimmedData = {
            title: eventData?.title?.trim(),
            description: eventData?.description?.trim(),
            event_date: eventData?.event_date?.trim(),
            location: eventData?.location?.trim(),
            category: eventData?.category?.trim(),
            image: eventData?.image?.trim(),
            featured: eventData?.featured ?? false,
            date_label: eventData?.date_label?.trim(),
            time_label: eventData?.time_label?.trim()
        };

        if (
            !trimmedData.title ||
            !trimmedData.event_date ||
            !trimmedData.location ||
            !trimmedData.category ||
            !trimmedData.image ||
            !trimmedData.date_label ||
            !trimmedData.time_label
        ) {
            throw new ValidationError(
                'Título, data, local, categoria, imagem e informações de exibição são obrigatórios.'
            );
        }

        if (typeof trimmedData.featured !== 'boolean') {
            throw new ValidationError('O campo featured deve ser verdadeiro ou falso.');
        }

        const eventDate = new Date(trimmedData.event_date);

        if (Number.isNaN(eventDate.getTime())) {
            throw new ValidationError('Data do evento inválida.');
        }

        if (trimmedData.title.length > 150) {
            throw new ValidationError('O título deve ter no máximo 150 caracteres.');
        }

        if (trimmedData.location.length > 200) {
            throw new ValidationError('O local deve ter no máximo 200 caracteres.');
        }

        const newEvent = await eventsRepository.createEvent(trimmedData);
        return newEvent;
    }
};

module.exports = eventsService;