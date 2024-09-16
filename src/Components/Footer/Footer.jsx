import { useEffect } from 'react'
import './Footer.css';
import { FaCameraRetro } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Aos from 'aos';
import "aos/dist/aos.css";
import Logo from '../../assets/Images/signup-logo.png'

const Footer = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <footer className="footer" data-aos="fade-down">
      <div className="footer-content">
        <div className="footer-section logo-section">
          <img src={Logo} alt="NectarBuzz logo" className="logo" />
        </div>

        <div className="footer-section contact-section">
          <h2>GET IN TOUCH</h2>
          <address>
            Plot 2055, Green Estate, Amuwo Odofin, Lagos.<br />
            +2347062810942<br />
            <a href="mailto:info@nectarbuzz.com">info@nectarbuzz.com</a>
          </address>
          <div className="social-icons">
            <a href="https://instagram.com/sage.pixel" target="_blank" rel="noopener noreferrer"><FaCameraRetro /></a>
            <a href="https://twitter.com/nuelsage" target="_blank" rel="noopener noreferrer"><AiOutlineX/></a>
            <a href="https://whatsapp.com/+2347062059128" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>

        <div className="footer-section info-section">
          <h2>INFORMATION</h2>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Our Product</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Condition</a></li>
          </ul>
        </div>

        <div className="footer-section support-section">
          <h2>SUPPORT</h2>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/track-order">Track Order</a></li>
            <li><a href="/jar-size-guide">Jar Size Guide</a></li>
            <li><a href="/return-policy">Return Policy</a></li>
            <li><a href="/shipping">Shipping & Delivery</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© NectarBuzz Nigeria, Designed by Group 5</p>
      </div>
    </footer>
    );
};

export default Footer;