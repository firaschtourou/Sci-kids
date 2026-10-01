import React from 'react';
import  './Clients.css';
import { ClientsGrid } from './ClientsGrid';

export function ClientsSection() {
  const clients = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f33936d714a3d1c9a30a5e679cc1492b49c9275c22182745acf1192b6794cccf?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Client logo 1" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/5019f9f9e39719d7b57280ed5828ce280da51acff8ceec872dc0ecbc7e5011a5?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Client logo 2" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/dc22d9b11fe5e7a3ecebff945fc2c904f1e6d2ed57470a3d4d7777086238c84f?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Client logo 3" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/8cf2415997b7dbdba94e3194cbf744d21414ffa59d984d9ce3d72a1e8b015795?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Client logo 4" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b13109eebf139c5d1e330095460d91e83abbadc7326c961068919814ad2e88d?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Client logo 5" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa75a2248ab1de4f3cf40cdae4e8c6f8722f909038852fcf43cac2aa82e98b46?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Client logo 6" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/053802ce5c52fc6bbf2c12dbe8522411f3d28ce22f2b55abb16114877e2e4df7?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Client logo 7" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c434dc7e11590c949e96bd710958cff3ef41320d59dc811909f25defd79674c0?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Client logo 8" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/82be23cd4dd937b3260d4d82763a07946358c78fda5659f637a7decb563c0641?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Client logo 9" }
  ];

  return (
    <section className="clientsSection">
      <div className="clientsContainer">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a89b80a0eb0f90660404a415aab1ade9b4edde79506eeb343f9e0e3a1aba8ec8?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
          alt=""
          className="decorativeBorder"
        />
        <h2 className="sectionTitle">OUR CLIENTS</h2>
        <h3 className="sectionSubtitle">
          They trust us !
        </h3>
        <ClientsGrid clients={clients} />
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/705c94f6bbcb54d959c42a55294a7c2a4e9192d3688f6020ceea39c74f6f3665?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb"
        alt=""
        className="decorativeBorder"
      />
    </section>
  );
}
export default ClientsSection ;