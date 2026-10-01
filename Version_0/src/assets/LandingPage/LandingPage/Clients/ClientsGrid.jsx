import React from 'react';
import './Clients.css';
import { ClientLogo } from './ClientLogo';

export function ClientsGrid({ clients }) {
  const rows = [];
  for (let i = 0; i < clients.length; i += 3) {
    rows.push(clients.slice(i, i + 3));
  }

  return (
    <>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="clientsGrid">
          <div className="gridRow">
            {row.map((client, index) => (
              <ClientLogo
                key={index}
                src={client.src}
                alt={client.alt}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}