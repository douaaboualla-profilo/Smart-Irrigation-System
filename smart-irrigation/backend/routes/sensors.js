const express = require('express');
const router = express.Router();

// Simulated sensor data
router.get('/', (req, res) => {
  res.json({
    soilMoisture: Math.random() * 100,
    temperature: 20 + Math.random() * 10,
    humidity: 40 + Math.random() * 20
  });
});

module.exports = router;
