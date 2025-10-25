import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <nav className="d-flex justify-content-between align-items-center">
          <a href="/" aria-label="Nextcent">
            <img src="/assets/images/site-logo.png" alt="Nextcent" />
          </a>
          <ul className={`menu-list list-unstyled d-flex align-items-center ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">Service</a></li>
            <li className="nav-item"><a href="#">Features</a></li>
            <li className="nav-item"><a href="#">Product</a></li>
            <li className="nav-item"><a href="#">Testimonial</a></li>
            <li className="nav-item"><a href="#">FAQ</a></li>
            <li className="nav-item"><a href="#">Login</a></li>
            <li className="nav-item">
              <a href="#" className="btn">
                Sign
                <img src="/assets/images/icons/right_aero.png" alt="right-aero" />
              </a>
            </li>
          </ul>
          <button 
            className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
