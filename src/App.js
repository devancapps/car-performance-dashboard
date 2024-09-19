import React from 'react';
import Dashboard from './components/Dashboard';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Performance Dashboard</h1>
      </header>
      <main>
        <Dashboard />
      </main>
      <footer>
        <p>© 2024 Car Performance Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;