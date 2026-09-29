import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">RÜNE</a>
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <i className={isOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </div>
      </div>
      <ul className={`nav__links ${isOpen ? 'open' : ''}`} id="nav-links" onClick={closeMenu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#rent">Rent</a></li>
        <li><a href="#ride">Ride</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="nav__btn">
        <button className="btn" onClick={() => alert('Welcome to Rüne Rental Car! Select a vehicle below to get started.')}>
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
