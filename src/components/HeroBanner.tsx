import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <section className="hero-banner bg-bluegraylight">
      <div className="container">
        <div className="left-panel">
          <div className="content">
            <h1 className="text-64">
              Lessons and insights <span>from 8 years</span>
            </h1>
            <p>Where to grow your business as a photographer: site or social media?</p>
            <a className="btn" href="#">Register</a>
          </div>
        </div>
        <div className="right-panel">
          <img src="/assets/images/banner_image.svg" alt="banner_image" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
