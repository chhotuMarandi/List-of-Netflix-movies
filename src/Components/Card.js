import React from 'react';
import '../Components/Card.css';

const Card = () => {
  return (
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
  );
};

export default Card;
