import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <h1>List Of Top Five Netflix Series</h1>
      <div className="container">
        <div className="card">
          <img
            src="https://assets-prd.ignimgs.com/2022/05/12/stranger-things-4-poster-1652364986162.jpeg"
            alt=""
          />
          <p className="platform">Netflix Original Series</p>
          <h3 className="title">Stranger Things</h3>
          <button>
            <a href="https://www.netflix.com/in/title/80057281"></a>
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
