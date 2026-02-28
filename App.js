import React from './react';
import Dashboard from './Dashboard';
import ControlPanel from './ControlPanel';
import Analytics from './Analytics';

function App() {
  return (
    <div>
      <h1>Smart Irrigation System</h1>
      <Dashboard />
      <ControlPanel />
      <Analytics />
    </div>
  );
}

export default App;
