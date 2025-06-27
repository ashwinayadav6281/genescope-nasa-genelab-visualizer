const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('./db');

router.get('/projects', async (req, res) => {
  try {
    const response = await axios.get('https://genelab-data.ndc.nasa.gov/genelab/projects');
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'NASA API Error' });
  }
});

router.post('/save', async (req, res) => {
  const { accession, title } = req.body;
  try {
    await pool.query('INSERT INTO projects(accession, title) VALUES($1, $2)', [accession, title]);
    res.sendStatus(201);
  } catch (err) {
    res.status(500).json({ error: 'DB Error' });
  }
});

module.exports = router;
