import React from 'react';

const Puntuacion = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={i} className="bi bi-star-fill text-warning"></span>);
  }

  if (halfStar) {
    stars.push(<span key="half" className="bi bi-star-half text-warning"></span>);
  }

  const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={i + filledStars + 1} className="bi bi-star text-warning"></span>);
  }

  return <div>{stars}</div>;
};

export default Puntuacion;
