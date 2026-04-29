const mongoose = require('mongoose');

const sensorSchema = new mongoose.Schema({
    sensorName: String,
    voltage: Number,
    unit: { type: String, default: "V" },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sensor', sensorSchema);