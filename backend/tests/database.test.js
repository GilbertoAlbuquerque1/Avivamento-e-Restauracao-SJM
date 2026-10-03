describe('Proteção do banco nos testes', () => {
    test('deve bloquear o carregamento da conexão real', () => {
        expect(() => require('../src/config/database')).toThrow(
            'Conexão real com o banco bloqueada nos testes.'
        );
    });

    test('deve bloquear o Jest mesmo se NODE_ENV for alterado', () => {
        jest.replaceProperty(process.env, 'NODE_ENV', 'development');
        try {
            expect(() => require('../src/config/database')).toThrow(
                'Conexão real com o banco bloqueada nos testes.'
            );
        } finally {
            jest.restoreAllMocks();
        }
    });
});
