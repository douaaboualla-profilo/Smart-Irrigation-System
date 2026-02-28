const express = require('express');
const router = express.Router();

let irrigationMode = "AUTO";

router.get('/', (req, res) => {
  res.json({ mode: irrigationMode });
});

router.post('/setMode', (req, res) => {
  irrigationMode = req.body.mode;
  res.json({ success: true, mode: irrigationMode });
});

module.exports = router;
