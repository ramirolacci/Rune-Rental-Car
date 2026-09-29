import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="section__container footer__container">
        <div className="footer__col">
          <h4>Resources</h4>
          <ul className="footer__links">
            <li><a href="#">Installation</a></li>
            <li><a href="#">Release Note</a></li>
            <li><a href="#">Community Help</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul className="footer__links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Product</h4>
          <ul className="footer__links">
            <li><a href="#">Demo</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Features</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Follow Us</h4>
          <ul className="footer__socials">
            <li>
              <a href="#" aria-label="Facebook"><i className="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#" aria-label="Twitter"><i className="ri-twitter-fill"></i></a>
            </li>
            <li>
              <a href="#" aria-label="Instagram"><i className="ri-instagram-fill"></i></a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn"><i className="ri-linkedin-fill"></i></a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bar">
        Copyright © 2024 Ramiro Lacci. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
