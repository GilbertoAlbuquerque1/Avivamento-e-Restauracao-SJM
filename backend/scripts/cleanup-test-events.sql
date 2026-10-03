-- Execução MANUAL no SQL Editor do banco que serve /api/events.
-- Revise primeiro esta consulta. Foram identificados seis registros de teste,
-- IDs 51 a 56, em 03/10/2026. Não remove outros eventos pelo título.
SELECT id, title, event_date, location, created_at
FROM public.events
WHERE id IN (51, 52, 53, 54, 55, 56)
ORDER BY id;

BEGIN;

-- Cópia de recuperação fora do schema público usado pela API.
CREATE SCHEMA IF NOT EXISTS maintenance;
CREATE TABLE IF NOT EXISTS maintenance.events_test_cleanup_backup AS
SELECT * FROM public.events WITH NO DATA;

-- A remoção e o backup fazem parte da mesma transação. Se o backup falhar,
-- nenhuma exclusão é confirmada. Os campos também devem coincidir com o teste.
WITH removed AS (
    DELETE FROM public.events
    WHERE id IN (51, 52, 53, 54, 55, 56)
      AND title = 'Conferência de Jovens'
      AND description = 'Uma conferência de capacitação e louvor.'
      AND event_date = TIMESTAMP '2026-10-15 19:30:00'
      AND location = 'Templo Principal'
      AND category IS NULL
      AND image IS NULL
      AND featured = false
      AND date_label IS NULL
      AND time_label IS NULL
    RETURNING *
), archived AS (
    INSERT INTO maintenance.events_test_cleanup_backup
    SELECT * FROM removed
    RETURNING id
)
SELECT id AS removed_and_backed_up_id FROM archived ORDER BY id;

COMMIT;

-- Verificação: devem permanecer os cinco eventos reais (IDs 3, 4, 29, 30, 49),
-- além de quaisquer eventos legítimos cadastrados depois da inspeção.
SELECT id, title, category FROM public.events ORDER BY event_date, id;

-- Recuperação opcional, executar separadamente apenas se necessário:
-- INSERT INTO public.events
--     (id, title, description, event_date, location, created_at, updated_at,
--      category, image, featured, date_label, time_label)
-- SELECT id, title, description, event_date, location, created_at, updated_at,
--        category, image, featured, date_label, time_label
-- FROM maintenance.events_test_cleanup_backup
-- WHERE id IN (51, 52, 53, 54, 55, 56)
-- ON CONFLICT (id) DO NOTHING;
