import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import MemeGeneraor from './components/MemeGeneraor';


function App() {
  return (
    <div className="App">
      <MemeGeneraor />
    </div>
  );
}

export default App;
