jest.mock('../src/repositories/events.repository', () => ({
    getEvents: jest.fn(),
    createEvent: jest.fn()
}));

jest.mock('../src/repositories/users.repository', () => ({
  findByEmail: jest.fn(),
  createUser: jest.fn()
}));