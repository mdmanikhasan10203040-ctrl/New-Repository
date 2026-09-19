const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('BongoStream Backend is Running Live!');
});

app.get('/api/movies', (req, res) => {
    res.json([
        {
            id: 1,
            title: "Sample Movie",
            poster: "https://via.placeholder.com/150",
            streamUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
        }
    ]);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
