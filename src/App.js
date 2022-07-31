import React from 'react';

const App = () => {
  return (
    <div>
      <h1>List Of Top Five Netflix Series</h1>
      <div className="container">
        <div className="card">
          <img
            src="https://assets-prd.ignimgs.com/2022/05/12/stranger-things-4-poster-1652364986162.jpeg"
            alt=""
          />
          <p className="platform">Netflix Original Series</p>
          <h3 className="title">Stranger Things</h3>
          <button>Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default App;
