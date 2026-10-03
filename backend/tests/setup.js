jest.mock('../src/repositories/events.repository', () => ({
    getEvents: jest.fn(),
    createEvent: jest.fn()
}));
