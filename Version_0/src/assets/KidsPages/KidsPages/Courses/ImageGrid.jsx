import React from 'react';
import  './imagegrid.css';

const ImageGrid = ({ images }) => {
  return (
    <div className='image'>
    <div className="gridRow">
      {images.map((image, index) => (
        <div key={index} className="gridColumn">
          <img
            loading="lazy"
            src={image.src}
            alt={image.alt}
            className="gridImage"
          />
        </div>
      ))}
    </div>
    </div>
  );
};

export default ImageGrid;