import React from 'react';
import './App.css';
import Menu from './component/Menu';
import Reservation from './component/Reservation';

function App() {
  return (
    <div className = "div-wrapper">
      <Menu/>
      <Reservation/>
    </div>
  );
}

export default App;
