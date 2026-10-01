import React from 'react';
import { GalleryRow } from './GalleryRow';
import './gallery.css';

const galleryImages = [
  [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66342df426edc0da94eb7d6f4a5be65e0873eafd7967e412fc11448796e05770?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb', alt: 'Gallery image 1' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4a4d1459952eb50eecb48cba2509ad035bc4f9104c1675968266257f16c4be18?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb', alt: 'Gallery image 2' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5f4ec61556ecbd5ca5539f860b631c90e2ab60b68c59e3b7c6539e19105716b1?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb', alt: 'Gallery image 3' }
  ],
  [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/174fb5f3bdb90fa94e4e5f171fe5fb2202380a68a289a1a896e7d04ff1520b42?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb', alt: 'Gallery image 4' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4de7349e98cdfa4ec75fa9cb7b326832e8cfd2bb4762790113e25014f8092c6d?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb', alt: 'Gallery image 5' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c8f9884c8fcb5b9bbdbd96d6aaceeae066faa91fd8abf62d3566048e9008b40f?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb', alt: 'Gallery image 6' }
  ]
];

export const Gallery = () => {
  return (
    <section className="gallerySection">
      <div className="galleryBackground">
        <div className="galleryContent">
          <div className="headerSection">
            <div className="headerRow">
              <div className="leftImageColumn">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea06a7ed87b6326132cf53286358411f02415c777cb83ae6df91d5772a2add87?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                  alt="Decorative left header image"
                  className="leftImage"
                />
              </div>
              <div className="titleColumn">
                <div className="titleWrapper">
                  <h1 className="mainTitle">Gallery</h1>
                  <h2 className="subtitle">
                  What we do, in pictures!
                  </h2>
                </div>
              </div>
              <div className="rightImageColumn">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b1c7d81a00eeec97ecafdb7d0f9854908122df311e1ded709727c30643e0fb8?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
                  alt="Decorative right header image"
                  className="rightImage"
                />
              </div>
            </div>
          </div>
          <div className="galleryGrid">
            <GalleryRow images={galleryImages[0]} />
          </div>
          <div className="bottomGrid">
            <GalleryRow images={galleryImages[1]} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery ;