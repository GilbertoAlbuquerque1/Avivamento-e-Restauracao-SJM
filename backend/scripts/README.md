# Limpeza dos eventos criados pelos testes

Em 03/10/2026, a API pública retornou 11 eventos: cinco da agenda e seis
registros de `Conferência de Jovens` (IDs 51 a 56). Os seis registros coincidem
com título, descrição, data e local do teste `POST /api/events`.

O teste carregava `DATABASE_URL` pela configuração normal e inseria um registro
sem removê-lo. Agora a configuração do banco é substituída por um mock antes de
carregar a aplicação. A suíte verifica rotas, validação e consultas geradas,
sem abrir uma conexão PostgreSQL. Não é uma suíte de integração com PostgreSQL;
testes futuros de integração devem usar um banco exclusivo para testes.

## Aplicar a limpeza

1. Integre a correção dos testes antes de voltar a executar `npm test` na versão antiga.
2. Abra o SQL Editor do banco usado pela API. Execute primeiro somente o `SELECT`
   inicial de `cleanup-test-events.sql` e confira os IDs 51 a 56.
3. Execute o bloco de `BEGIN` até `COMMIT`. Ele remove apenas os registros que
   ainda correspondem aos dados do teste e salva os registros completos em
   `maintenance.events_test_cleanup_backup`, na mesma transação.
4. Execute a consulta de verificação e atualize `/eventos`. Os cinco eventos
   identificados da agenda têm IDs 3, 4, 29, 30 e 49. Novos eventos legítimos
   também devem permanecer.

O script é manual: publicar ou integrar este PR não executa a limpeza.
Reexecutá-lo não remove novos registros fora dos seis IDs. A recuperação está
comentada no final do SQL; ela não sobrescreve registros existentes.

## Outros pontos da varredura

- `src/config/init-db.js` deixa de inserir dois exemplos a cada execução.
- A migração inicial contém exemplos históricos. Ela foi preservada porque já
  foi aplicada; os registros atuais da API não incluem esses dois exemplos.
- `frontend/src/pages/Eventos/Eventos.jsx` usa a API, enquanto
  `frontend/src/components/Events/Events.jsx` usa `eventsData.js` na página
  inicial. Essa diferença não cria os seis registros no banco.
- A API atual só possui GET e POST para eventos. Não há rota DELETE disponível
  para fazer a limpeza com o acesso público.
