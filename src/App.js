import React from 'react';
import './App.css';
import Restorunt from './components/Core/Restorant';
function App() {
  return (
    <div className="App">
    <Restorunt tableCount={3}></Restorunt>
    </div>
  );
}

export default App;
