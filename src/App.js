import React from 'react';
import './App.css';
import Card from './Components/Card';
import SeriesList from './Components/SeriesList';

console.log(SeriesList[0]);

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="header">
          <h1>List Of Top Five Netflix Series</h1>
        </div>
        <div className="cards">
          <Card
            img={SeriesList[0].img}
            platform={SeriesList[0].platform}
            title={SeriesList[0].title}
            link={SeriesList[0].link}
          />
          <Card
            img={SeriesList[1].img}
            platform={SeriesList[1].platform}
            title={SeriesList[1].title}
            link={SeriesList[1].link}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
