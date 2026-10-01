import React from 'react';
import  './gallery.css';

export const GalleryImage = ({ src }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt=""
      className="galleryImage"
      role="img"
      aria-label="Gallery item"
    />
  );
};