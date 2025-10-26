import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <footer>
      <div className="container d-flex justify-content-between">
        <div className="footer-left-panel">
          <a href="/" aria-label="Nextcent">
            <img src="/assets/images/footer_Logo.png" alt="Nextcent" />
          </a>
          <p>Copyright © 2020 Nexcent ltd.</p>
          <p>All rights reserved</p>
          <ul className="list-unstyled d-flex social-icons">
            <li>
              <a href="#" aria-label="Instagram">
                <img src="/assets/images/social_icon/instagram.svg" alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Dribbble">
                <img src="/assets/images/social_icon/3.svg" alt="Dribbble" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="X (Twitter)">
                <img src="/assets/images/social_icon/x.svg" alt="X (Twitter)" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="YouTube">
                <img src="/assets/images/social_icon/youtube.svg" alt="YouTube" />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-mid-panel d-flex">
          <div className="footer-menu-list">
            <p className="footer-title">Company</p>
            <ul className="list-unstyled">
              <li><a href="#">About us</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Testimonials</a></li>
            </ul>
          </div>

          <div className="footer-menu-list">
            <p className="footer-title">Support</p>
            <ul className="list-unstyled">
              <li><a href="#">Help center</a></li>
              <li><a href="#">Terms of service</a></li>
              <li><a href="#">Legal</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-right-panel">
          <p className="footer-title">Stay up to date</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="youremail"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="btn-submit" aria-label="Submit email">
              <img src="/assets/images/icons/send.svg" alt="Send icon" />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
