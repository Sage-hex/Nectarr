import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import './Navbar.css';
import './Header2.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
      <div className="navbar__logo">
        <img src="/path-to-logo" alt="NectarBuz" />
        <p>Sweet goodness of nature</p>
      </div>
      <nav className={`navbar__links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
          <li><NavLink to="/shop" activeClassName="active">SHOP</NavLink></li>
          <li><NavLink to="/shop" activeClassName="active">HAMPER</NavLink></li>
        </ul>
      </nav>
      <div className="navbar__icons">
        <NavLink to="/search" className="navbar__icon">🔍</NavLink>
        <NavLink to="/cart" className="navbar__icon">🛒</NavLink>
        <NavLink to="/account" className="navbar__icon">👤</NavLink>
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        ☰
      </div>
    </header>
    );
};

export default Navbar;