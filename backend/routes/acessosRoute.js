const express = require('express');
const router = express.Router();
const pool = require('../db');

router.post('/', async (req, res) => {
    try {
        await pool.query('INSERT INTO registros_acessos (ip) VALUES ($1)', [req.ipAddress]);
        res.send('Registro de acesso salvo com sucesso!');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro do servidor');
    }
});

module.exports = router;
