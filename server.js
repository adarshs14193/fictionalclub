const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;


app.use(express.static(path.join(__dirname, 'public')));


app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});


app.get('/time', (req, res) => {
    const now = new Date();
    res.json({ time: now.toLocaleString() });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
