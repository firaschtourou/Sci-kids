import React from 'react';
import  './galleryimage.css';

export const GalleryImage = ({ src, alt }) => (
  <div className="imageColumn">
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="galleryImage"
    />
  </div>
);