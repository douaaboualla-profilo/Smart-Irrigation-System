import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    api.get('/sensors').then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h2>Real-Time Sensor Data</h2>
      <p>Soil Moisture: {data.soilMoisture?.toFixed(2)}%</p>
      <p>Temperature: {data.temperature?.toFixed(2)} °C</p>
      <p>Humidity: {data.humidity?.toFixed(2)}%</p>
    </div>
  );
}

export default Dashboard;
