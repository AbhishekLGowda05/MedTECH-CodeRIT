const express = require('express');
const path = require('path');
const routes = require('./routes/mainRoutes.js');

const dotenv = require('dotenv');
const connectDB=require('./config/db.js');
dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',routes)
app.use(express.static(path.join(__dirname, '../frontend')));

//routes


app.listen(PORT, () => {
    connectDB();
    
    console.log(`Server running on http://localhost:${PORT}`);
});
