import React from 'react';
import  './clubcard.css';

export const ClubCard = ({ 
  imageUrl, 
  title, 
  price, 
  description, 
  ageRange, 
  onReadMore 
}) => {
  return (
    <div className="card">
      <img 
        src={imageUrl} 
        alt={`${title} club illustration`} 
        className="cardImage"
      />
      <div className="header">
        <div className="title">{title}</div>
        {price && <div className={"priceCircle"}>{price}</div>}
      </div>
      <div className="description">{description}</div>
      <div className="ageGroup">
        <span className="ageLabel">Age:</span>
        <br />
        {ageRange}
      </div>
      <button 
        onClick={onReadMore}
        className="readMore"
        aria-label={`Read more about ${title}`}
      >
        Read more
      </button>
    </div>
  );
};