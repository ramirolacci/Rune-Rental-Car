import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenBooking }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav__wrapper">
        <div className="nav__header">
          <div className="nav__logo">
            <a href="#">
              <img src="/logo/rünelogo.png" alt="Rüne Logo" className="nav__logo__img" />
              <span>RÜNE</span>
            </a>
          </div>
          <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
            <i className={isOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
          </div>
        </div>

        <ul className={`nav__links ${isOpen ? 'open' : ''}`} id="nav-links" onClick={closeMenu}>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Vehículos</a></li>
          <li><a href="#rent">Ubicación</a></li>
          <li><a href="#ride">Alquilar</a></li>
          <li><a href="#contact">Nosotros</a></li>
        </ul>

        <div className="nav__btn">
          <button className="btn" onClick={onOpenBooking}>
            Empezar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
