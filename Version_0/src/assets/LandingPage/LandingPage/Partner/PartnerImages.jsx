import React from 'react';
import  './partners.css';

const PartnerImages = ({ src, className, alt }) => {
  return (
    <img
      loading="lazy"
      src={src}
      className={className}
      alt={alt}
    />
  );
};

export default PartnerImages;