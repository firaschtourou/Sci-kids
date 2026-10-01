import React from 'react';
import  './Clients.css';

export function ClientLogo({ src, alt }) {
  return (
    <div className="gridColumn">
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="clientLogo"
      />
    </div>
  );
}