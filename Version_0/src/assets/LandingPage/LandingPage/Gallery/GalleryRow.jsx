import React from 'react';
import { GalleryImage } from './GalleryImage';
import  './galleryrow.css';

export const GalleryRow = ({ images }) => (
  <div className="galleryRow">
    {images.map((image, index) => (
      <GalleryImage
        key={index}
        src={image.src}
        alt={image.alt}
      />
    ))}
  </div>
);