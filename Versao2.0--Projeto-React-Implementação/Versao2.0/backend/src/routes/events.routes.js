const expresse = require('express');
const router =  expresse.Router();

router.get('/events', (req, res) => {
    res.json([
     {
        id: 1,
        title: 'Encontro com Deus',
        date: '2025-12-31',
        time: '19:00',
        location: 'Auditório da SJM',
        description: 'Um encontro com Deus para renovar as forças e a fé.',
     },
     {
        id: 2,
        title: 'Culto de Celebração',
        date: '2026-01-01',
        time: '19:00',
        location: 'Igreja',
        description: 'Um culto de celebração para começar o ano com Deus.',
     }
     ]);
});

module.exports = router;
