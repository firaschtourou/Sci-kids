import React from 'react';
import { ClubCard } from './ClubCard';
import  './clubsection.css';

const clubsData = [
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b58a78938d6215d77bad55f996baecac00e65e8cfe36208dab9aed1bdc290ab3?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "Robotics & DIY Club",
    description: "The Robotics and DIY Club brings enthusiasts together to create and program robots and DIY projects.",
    ageRange: "6-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/4a58ef224d1ccbf676b80bf24372e485fb55f0906693d63a0834b0d50ea574ab?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "AVIATION & piloting club",
    description: "The Aviation & Piloting Club brings enthusiasts together to explore and practice flying and aviation.",
    ageRange: "12-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e959921965ca62d1dc92ddfc35685540edad0883135f3469523ccf0786f4a9df?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "Club Software - algorithm",
    description: "The Software - Algorithm Club explores algorithms and programming.",
    ageRange: "6-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d22fa8f2031e9969a03cb46533afba8be99ca1b37cf6052f5a91bb81264d07b?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "Debate club",
    description: "The Debate Club offers a space to discuss, argue, and exchange ideas on various topics.",
    ageRange: "6-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/54d95383548b8c23c54b5c8af450d05b34e2fb827c17a119f07c1acbe4cc7d24?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "Kidspreneur Club",
    description: "The Kidspreneur Club inspires young entrepreneurs to develop their ideas and create innovative projects.",
    ageRange: "6-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/c4d2feb8b9a9a165553499124bd36b5baabf788cfb206af820ff8a5428583e27?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "Multimedia club & content creation",
    description: "The Multimedia & Content Creation Club explores video, photo, and digital media production.",
    ageRange: "6-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9193f243969d6a7e35a090398ec02febdbab1d591401fde872bf3b61473a5931?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "Gaming",
    price: "45DT",
    description: "Boost strategic thinking, teamwork, creativity, and coding skills through interactive games and design tools.",
    ageRange: "6-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8e64bbdfea43a62a404d7fe2356b38601e42dcd3665b3f3a277e2e23db7de14?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "VR/XR CLUB",
    price: "45DT",
    description: "Master content creation, VR/AR, 3D modeling, and teamwork.",
    ageRange: "6-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb4fb4929a8508f7c5645acf91189a3c5c330f78a2d356db8925d5bb2fdbe72b?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "AEROSPACE CLUB",
    price: "45DT",
    description: "Explore space tech, rockets, satellites, and aerospace innovation.",
    ageRange: "6-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/8bb65a892f25aae24e6151bb80c6c9919e452adb3d6727448cb2753fa2cd3b16?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "ASTRONOMY CLUB",
    price: "45DT",
    description: "Discover astronomy and explore the universe.",
    ageRange: "6-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcb22b27289d83a11d3a794f7283a28168d3a959e266748a219237a74ed5b460?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "CHESS CLUB",
    price: "45DT",
    description: "Build strategy, focus, and problem-solving skills.",
    ageRange: "6-18 Years"
  },
  {
    imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/32dc9dd390b8c56d74356fffbe883f36f87497aeeddeece5b37d2676a849eac2?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb",
    title: "AI programming club",
    price: "45DT",
    description: "Learn AI, models, ethics, and data.",
    ageRange: "6-18 Years"
  }
];

export const ClubsSection = () => {
  const handleReadMore = (clubTitle) => {
    console.log(`Read more clicked for ${clubTitle}`);
  };

  return (
    <section className="container">
      <div className="content">
        <h1 className="title">On Going Classes</h1>
        <h2 className="subtitle">
          Take The Classes & Start Learning From Today
        </h2>
        <div className="grid">
          {clubsData.map((club, index) => (
            <ClubCard
              key={index}
              imageUrl={club.imageUrl}
              title={club.title}
              price={club.price}
              description={club.description}
              ageRange={club.ageRange}
              onReadMore={() => handleReadMore(club.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ClubsSection ;