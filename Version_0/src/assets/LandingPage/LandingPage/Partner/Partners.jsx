import React from 'react';
import  './partners.css';
import PartnerImages from './PartnerImages';

const Partners = () => {
  const partnerData = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c79ca1abeac8d9312692f2f33eaa28269165671c12b8de5251d8740423c367a6?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Partner logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/911cff667ab61b5a39b5d224581e00850a860dcfcec6c83faaeb5934999f5e96?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Corporate partner logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c62c02149dd8c556d8c62478d9d28ad98d6b92cbecaaa73ccb9712ceb24c403b?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Business partner logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da20c3ef106d13f55ea4b888bcfa757a82c1544cdfb9b1a331b9b2f16f50bde7?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Collaboration partner logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3f0b74dd27480dde1ad2466b77e10b7aff74b6767399b7a50621b468d2a650e1?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Strategic partner logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b96d90a3aeaffa3709f593c9832a0d3807d2e0feb091fbf675344250d6b1882?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Alliance partner logo" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9451f5b2c93500188097cd97216b260425c60e19e08f78f3b0ef09681bdad36e?placeholderIfAbsent=true&apiKey=7ac1e9db73ba42ec81c04ec38ddf53cb", alt: "Community partner logo" }
  ];

  return (
    <div className="partnersSection">
      <div className="partnersContainer">
        <div className="headerSection">
          <PartnerImages
            src={partnerData[0].src}
            className="logoImage"
            alt={partnerData[0].alt}
          />
          <div className="titleContainer">
            <div className="mainTitle">
            Partners & collaborators
            </div>
            <div className="subTitle">
            united together for a better community
            </div>
          </div>
          <PartnerImages
            src={partnerData[0].src}
            className="logoImage"
            alt={partnerData[0].alt}
          />
        </div>
        <div className="partnersGrid">
          <div className="gridRow">
            <div className="gridColumn">
              <PartnerImages
                src={partnerData[1].src}
                className="partnerLogo"
                alt={partnerData[1].alt}
              />
            </div>
            <div className="gridColumn">
              <PartnerImages
                src={partnerData[2].src}
                className="centerLogo"
                alt={partnerData[2].alt}
              />
            </div>
            <div className="gridColumn">
              <PartnerImages
                src={partnerData[3].src}
                className="partnerLogo"
                alt={partnerData[3].alt}
              />
            </div>
          </div>
        </div>
        <div className="bottomSection">
          <div className="bottomRow">
            <div className="bottomColumn">
              <PartnerImages
                src={partnerData[4].src}
                className="bottomLogo"
                alt={partnerData[4].alt}
              />
            </div>
            <div className="rightColumn">
              <div className="rightLogoContainer">
                <PartnerImages
                  src={partnerData[5].src}
                  className="wideLogo"
                  alt={partnerData[5].alt}
                />
                <PartnerImages
                  src={partnerData[6].src}
                  className="bottomWideLogo"
                  alt={partnerData[6].alt}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;