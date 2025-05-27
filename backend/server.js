const express = require('express');
const path = require('path');
const routes = require('./routes/mainRoutes.js');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db.js');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend files
app.use(express.static(path.join(__dirname, 'public/frontend')));

// Default route to load index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/frontend/index.html'));
});

// API routes
app.use('/api', routes);

app.listen(PORT, () => {
    connectDB();
    console.log(`Server running on http://localhost:${PORT}`);
});
