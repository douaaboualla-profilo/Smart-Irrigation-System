import React, { useState } from 'react';
import api from '../services/api';

function ControlPanel() {
  const [mode, setMode] = useState("AUTO");

  const switchMode = (newMode) => {
    api.post('/control/setMode', { mode: newMode }).then(res => setMode(res.data.mode));
  };

  return (
    <div>
      <h2>Irrigation Control</h2>
      <p>Current Mode: {mode}</p>
      <button onClick={() => switchMode("AUTO")}>Automatic</button>
      <button onClick={() => switchMode("MANUAL")}>Manual</button>
    </div>
  );
}

export default ControlPanel;
