import React from 'react';
import './App.css';
import Card from './Components/Card';
import SeriesList from './Components/SeriesList';

console.log(SeriesList[0]);

const slist = (value) => {
  return (
    <Card
      img={value.img}
      platform={value.platform}
      title={value.title}
      link={value.link}
    />
  );
};

const App = () => {
  return (
    <div className="main-container">
      <div className="container">
        <div className="header">
          <h1>List Of Top Five Netflix Series</h1>
        </div>
        <div className="cards">{SeriesList.map(slist)}</div>
      </div>
    </div>
  );
};

export default App;
