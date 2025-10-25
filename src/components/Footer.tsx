import React, { useState, FormEvent } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your email submission logic here
    setEmail('');
  };

  return (
    <footer>
      <section className="footer-top bg-bluegraylight">
        <div className="container text-center">
          <h2 className="text-64">Pellentesque suscipit fringilla libero eu.</h2>
          <a href="#" className="btn">
            Get a Demo 
            <img src="/assets/images/icons/right_aero.png" alt="right aero icon" />
          </a>
        </div>
      </section>

      <section className="footer-bottom bg-bluegraydark">
        <div className="container d-flex">
          <div className="left-panel">
            <img className="m-button-30" src="/assets/images/footer_Logo.png" alt="site-logo" />
            <p className="text-14 text-blue-graylight">
              Copyright © 2020 Nexcent ltd. All rights reserved
            </p>
            <div className="social-icon">
              <a href="#"><img src="/assets/images/social_icon/instagram.svg" alt="Instagram" /></a>
              <a href="#"><img src="/assets/images/social_icon/3.svg" alt="not" /></a>
              <a href="#"><img src="/assets/images/social_icon/x.svg" alt="X" /></a>
              <a href="#"><img src="/assets/images/social_icon/youtube.svg" alt="Youtube" /></a>
            </div>
          </div>
          <div className="middle-panel">
            <div>
              <strong className="text-14">Company</strong>
              <ul className="list-unstyled m-top-16">
                <li><a href="#" className="text-blue-graylight text-10">About us</a></li>
                <li><a href="#" className="text-blue-graylight text-10">Blog</a></li>
                <li><a href="#" className="text-blue-graylight text-10">Contact us</a></li>
                <li><a href="#" className="text-blue-graylight text-10">Pricing</a></li>
                <li><a href="#" className="text-blue-graylight text-10">testimonials</a></li>
              </ul>
            </div>
            <div>
              <strong className="text-14">Support</strong>
              <ul className="list-unstyled m-top-16">
                <li><a href="#" className="text-blue-graylight text-10">Help center</a></li>
                <li><a href="#" className="text-blue-graylight text-10">Terms of services</a></li>
                <li><a href="#" className="text-blue-graylight text-10">Legal</a></li>
                <li><a href="#" className="text-blue-graylight text-10">Privacy policy</a></li>
                <li><a href="#" className="text-blue-graylight text-10">Status</a></li>
              </ul>
            </div>

            <div>
              <strong className="text-20">Stay up to date</strong>
              <form onSubmit={handleSubmit}>
                <input
                  className="youremail"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <img 
                  src="/assets/images/icons/send.svg" 
                  alt="send icon" 
                  onClick={() => document.getElementById('email')?.closest('form')?.requestSubmit()}
                  style={{ cursor: 'pointer' }}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
