import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="header">
          <h1>List Of Top Five Netflix Series</h1>
        </div>
        <div className="cards">
          <div className="card">
            <img
              src="https://assets-prd.ignimgs.com/2022/05/12/stranger-things-4-poster-1652364986162.jpeg"
              alt=""
            />
            <p className="platform">Netflix Original Series</p>
            <h3 className="title">Stranger Things</h3>
            <a href="https://www.netflix.com/in/title/80057281">
              <button class="btn">Watch Now</button>
            </a>
          </div>
          <div className="card">
            <img
              src="https://assets-prd.ignimgs.com/2022/05/12/stranger-things-4-poster-1652364986162.jpeg"
              alt=""
            />
            <p className="platform">Netflix Original Series</p>
            <h3 className="title">Stranger Things</h3>
            <a href="https://www.netflix.com/in/title/80057281">
              <button class="btn">Watch Now</button>
            </a>
          </div>
          <div className="card">
            <img
              src="https://assets-prd.ignimgs.com/2022/05/12/stranger-things-4-poster-1652364986162.jpeg"
              alt=""
            />
            <p className="platform">Netflix Original Series</p>
            <h3 className="title">Stranger Things</h3>
            <a href="https://www.netflix.com/in/title/80057281">
              <button class="btn">Watch Now</button>
            </a>
          </div>
          <div className="card">
            <img
              src="https://assets-prd.ignimgs.com/2022/05/12/stranger-things-4-poster-1652364986162.jpeg"
              alt=""
            />
            <p className="platform">Netflix Original Series</p>
            <h3 className="title">Stranger Things</h3>
            <a href="https://www.netflix.com/in/title/80057281">
              <button class="btn">Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
