import React from 'react';
import './App.css';
import Card from './Components/Card';

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="header">
          <h1>List Of Top Five Netflix Series</h1>
        </div>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default App;
