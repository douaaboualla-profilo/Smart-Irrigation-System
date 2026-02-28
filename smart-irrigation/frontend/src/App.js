import React from 'react';
import Dashboard from './components/Dashboard';
import ControlPanel from './components/ControlPanel';
import Analytics from './components/Analytics';

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
