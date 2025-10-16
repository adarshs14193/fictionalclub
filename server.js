const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for a simple greeting
app.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

// Route to get the current time
app.get('/time', (req, res) => {
    const now = new Date();
    res.json({ time: now.toLocaleString() });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});