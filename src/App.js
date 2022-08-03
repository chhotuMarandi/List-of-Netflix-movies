import React from 'react';
import './App.css';
import Card from './Components/Card';
import SeriesList from './Components/SeriesList';

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="header">
          <h1>List Of Top Five Netflix Series</h1>
        </div>
        <div className="cards">
          {SeriesList.map((value, index) => {
            console.log(index);
            return (
              <Card
                img={value.img}
                platform={value.platform}
                title={value.title}
                link={value.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
