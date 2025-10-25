import React from 'react';

const Design: React.FC = () => {
  return (
    <section className="design">
      <div className="container d-flex">
        <img src="/assets/images/pana.svg" alt="pana" />
        <div className="right-panel">
          <h2 className="text-36">How to design your site footer like we did</h2>
          <p className="text-14">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec
            tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices
            mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis
            finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget
            nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit
            venenatis libero. Donec consectetur faucibus ipsum id gravida.
          </p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Design;
