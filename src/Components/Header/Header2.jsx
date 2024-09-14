import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header2.css';
import logo from '../../assets/Images/signup-logo.png'
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="navbar">
            <div className="navbar__logo">
                <img src={logo} alt="NectarBuz" />
                <p>Sweet goodness of nature</p>
            </div>

            <nav className={`navbar__links ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><NavLink exact to="/" activeClassName="active">HOME</NavLink></li>
                    <li><NavLink to="/about" activeClassName="active">ABOUT</NavLink></li>
                    <li><NavLink to="/shop" activeClassName="active">SHOP</NavLink></li>
                    <li><NavLink to="/hampper" activeClassName="active">HAMPER</NavLink></li>
                    <li><NavLink to="/cart" activeClassName="active" className='dropdown'>CART</NavLink></li>
                    <li><NavLink to="/getStarted" activeClassName="active" className='dropdown'>ACCOUNT</NavLink></li>
                </ul>
            </nav>

            <div className="navbar__icons">
                <NavLink to="/search" className="navbar__icon"><FaSearch />
</NavLink>
                <NavLink to="/cart" className="navbar__icon"><MdShoppingCart /></NavLink>
                <NavLink to="/getStarted" className="navbar__icon"><VscAccount /></NavLink>
            </div>

            <div className="navbar__hamburger" onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </div>
        </header>
    );
};

export default Navbar;