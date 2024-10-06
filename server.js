const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/weather', async (req, res) => {
    const apiKey = '9a5bcce8143666a0b654237fd7a7df25'; // Your actual API key
    const url = `https://api.example.com/weather/philippines?apikey=${apiKey}`;

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
