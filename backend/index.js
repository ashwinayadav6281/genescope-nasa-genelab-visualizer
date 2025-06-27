const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: ['http://localhost:3000','http://localhost:3001']
}));


const PORT = process.env.PORT || 5000;

app.get('/api/datasets', async (req, res) => {
  try {
    const response = await axios.get('https://genelab-data.ndc.nasa.gov/genelab/data/search');
    console.log('🔍 NASA API response:', response.data);  // 👈 ADD THIS
    res.json(response.data);
  } catch (error) {
    console.error('GeneLab API error:', error.message);
    res.status(500).json({ error: 'Failed to fetch from NASA GeneLab' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
