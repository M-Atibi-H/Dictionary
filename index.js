const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Replace with your actual API key
const API_KEY = 'Ot28mMZlv6k4ttzYvKAA0Q==gsjSjZUAsL2qGe3O';

app.get('/dictionary/:word', async (req, res) => {
    const word = req.params.word;

    try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/dictionary?word=${word}`, {
            headers: { 'X-Api-Key': API_KEY }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data from API Ninjas');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});