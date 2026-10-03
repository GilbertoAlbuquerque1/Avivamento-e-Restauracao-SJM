-- Executar manualmente no SQL Editor do Supabase após atualizar o código local.
-- Não é uma migration e não deve ser executado no início da aplicação.
-- IDs e dados conferidos no GET /api/events em 03/10/2026.
-- Se qualquer registro não corresponder, a transação inteira é desfeita.
BEGIN;

DO $$
DECLARE
    removed_count INTEGER;
BEGIN
    DELETE FROM public.events
    WHERE id IN (51, 52, 53, 54, 55, 56)
      AND title = 'Conferência de Jovens'
      AND description = 'Uma conferência de capacitação e louvor.'
      AND event_date = TIMESTAMP '2026-10-15 19:30:00'
      AND location = 'Templo Principal'
      AND category IS NULL
      AND image IS NULL
      AND featured IS FALSE
      AND date_label IS NULL
      AND time_label IS NULL;

    GET DIAGNOSTICS removed_count = ROW_COUNT;

    IF removed_count <> 6 THEN
        RAISE EXCEPTION
            'Limpeza cancelada: esperados 6 registros, encontrados %. Nenhuma exclusão será mantida.',
            removed_count;
    END IF;

    RAISE NOTICE 'Removidos % registros de teste.', removed_count;
END $$;

SELECT id, title, event_date, category
FROM public.events
ORDER BY event_date ASC;

COMMIT;
