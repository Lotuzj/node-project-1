const express = require('express');
const connectDB = require('./config/db');
const sensorRoutes = require('./routes/sensorRoutes');

const app = express();
const PORT = 3000;

// 1. Connect to MongoDB
connectDB();

// 2. Middleware
app.use(express.json());

// 3. Link Routes
app.use('/api/sensors', sensorRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});