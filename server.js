const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Basic route to test the server
app.get('/', (req, res) => {
    res.send('Welcome to the Jannayak App API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
