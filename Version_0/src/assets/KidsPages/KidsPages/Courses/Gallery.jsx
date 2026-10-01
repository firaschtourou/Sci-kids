import React from 'react';
import { GalleryImage } from './GalleryImage';
import './gallery.css';
import star from './Star 3.png'

// Array de 8 images
const images = Array(8).fill('https://cdn.builder.io/api/v1/image/assets/TEMP/66bbb2565d62829123e5f0461eb1f2487f2a737c18bce1ecce689e3d5110451e?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb');

// Lien de l'image unique
const highlightImage = 'https://cdn.builder.io/api/v1/image/assets/TEMP/6d6c7e1a27a36c1bbfaf155820036559ddd6ae643bdfa9b14f850ecb2530097c?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb';

export const Gallery = () => {
  return (
        <div>
          <div className='global'>
    <img src={star}  className='etoile1'/>
    <img src={star} className='etoile2'/>
    <img src={star} className='etoile3'/>
    <img src={star} className='etoile4'/>
    <img src={star} className='etoile5'/>
    <img src={star} className='etoile6'/>
    <img src={star} className='etoile7'/>
    <img src={star} className='etoile8'/>
    <img src={star} className='etoile9'/>
        </div>
        </div>
  );
};

export default Gallery;
