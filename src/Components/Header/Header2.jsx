import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header2.css";
import logo from "../../assets/Images/signup-logo.png";
import { FaSearch } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { useSelector } from "react-redux";
import CartNumber from "../CartItems/CartNumber";

const Navbar = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const { firstName } = useSelector((state) => state?.buyer);
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    nav("/login");
    setIsOpen(false); // Close the hamburger menu on logout
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the hamburger menu when any link is clicked
  };

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <img src={logo} alt="NectarBuz" />
        <p style={{ fontSize: '10px' }}>Nature's spoonful of Health</p>
      </div>
      <nav className={`navbar__links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active" onClick={handleLinkClick}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active" onClick={handleLinkClick}>
              ABOUT
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop" activeClassName="active" onClick={handleLinkClick}>
              SHOP
            </NavLink>
          </li>
          <li>
            <NavLink to="/hampper" activeClassName="active" onClick={handleLinkClick}>
              HAMPER
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="active" className='dropdown' onClick={handleLinkClick}>
              CART
            </NavLink>
          </li>
          <li>
            <NavLink to="/getStarted" activeClassName="active" className='dropdown' onClick={handleLinkClick}>
              ACCOUNT
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="navbar__icons">
        <NavLink to="/search" className="navbar__icon">
          {/* <FaSearch /> */}
        </NavLink>
        <div className="navbar_cart_icon_container">
          <CartNumber />
        </div>
        {token == null ? (
          <NavLink to="/getStarted" className="navbar__icon" onClick={handleLinkClick}>
            <VscAccount />
          </NavLink>
        ) : (
          <div className="loggedin_user_profile_container">
            <div className="loggedin_user" onClick={() => setShowLogout(!showLogout)}>
              {firstName?.charAt(0).toUpperCase()}
            </div>
            {showLogout ? (
              <div className="home_logout" onClick={logout}>
                Logout
              </div>
            ) : null}
          </div>
        )}
      </div>
      <div className="navbar__hamburger" onClick={toggleMenu}>
        {isOpen ? "✘" : "☰"}
      </div>
    </header>
  );
};

export default Navbar;
