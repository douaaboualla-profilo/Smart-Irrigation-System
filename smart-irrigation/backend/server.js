const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const sensorRoutes = require('./routes/sensors');
const controlRoutes = require('./routes/control');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/sensors', sensorRoutes);
app.use('/api/control', controlRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
