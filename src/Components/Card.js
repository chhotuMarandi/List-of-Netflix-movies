import React from 'react';
import '../Components/Card.css';
import SeriesList from './SeriesList';

console.log(SeriesList[0]);

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="series img" />
      <p className="platform">{props.platform}</p>
      <h3 className="title">{props.title}</h3>
      <a href={props.link}>
        <button class="btn">Watch Now</button>
      </a>
    </div>
  );
};

export default Card;
