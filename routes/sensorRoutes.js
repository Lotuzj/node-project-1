const express = require('express');
const router = express.Router();
const Sensor = require('../models/Sensor'); // Importing the model we just made

// GET all data
router.get('/', async (req, res) => {
    try {
        const readings = await Sensor.find();
        res.json(readings);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST new reading (Matches your /add-sensor logic)
router.post('/add', async (req, res) => {
    try {
        const newReading = new Sensor({
            sensorName: req.body.name,
            voltage: req.body.volts
        });
        await newReading.save();
        res.status(201).json({ message: "Reading saved!" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// UPDATE reading (Matches your PUT logic)
router.put('/update/:targetName', async (req, res) => {
    try {
        const updatedDoc = await Sensor.findOneAndUpdate(
            { sensorName: req.params.targetName },
            { voltage: req.body.volts },
            { returnDocument: 'after' } // Fixed the deprecation warning from your terminal!
        );
        res.json(updatedDoc);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;