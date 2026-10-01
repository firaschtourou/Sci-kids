import React from 'react';
import { GoalsRow } from './GoalsRow';
import './sdgs.css';
const firstRowImages = [
  'https://cdn.builder.io/api/v1/image/assets/TEMP/46632a7926a16697483116877a5518059818e333e1a7ea546d29ca4c3a99c616?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/e3866692b0298ed33159fc695b6c1770acf617e960270379bb6c782bff31f2f7?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/28e477e711112afd6e0287ca69c62ef1b07596af3a524688436f7ce2f8ec0f7d?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb'
];

const secondRowImages = [
  'https://cdn.builder.io/api/v1/image/assets/TEMP/ea4bc34c7d31d00ddf20589ff4ff5bcccce5585008340f7041439e3889ebec58?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/7f993076c3db5b23d445070ef0ed92b1a71c91151fbe06055072c3044c19b558?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb',
  'https://cdn.builder.io/api/v1/image/assets/TEMP/5e1bd283012022298d62206100cca7d29e3120b071a86226fb818020e17f74fa?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb'
];

export const SDGs = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <h1 className="title">
        SDG’s goals
        </h1>
        <p className="description">
        Sci-Kids focuses on teaching children about the
Sustainable Development Goals (SDGs) through
its clubs and activities. These are the SDGs that


          <br />
          <br />
          Sci-Kids works on:
        </p>
        <div className="goalsGrid">
          <GoalsRow images={firstRowImages} startIndex={0} />
        </div>
        <div className="secondGridRow">
          <GoalsRow images={secondRowImages} startIndex={3} />
        </div>
      </div>
    </div>
  );
};
export default SDGs;