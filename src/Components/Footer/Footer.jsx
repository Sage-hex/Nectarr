// import { useEffect } from 'react'
// import './Footer.css'
// // import { FaCircleUser } from "react-icons/fa6";
// import { FaCameraRetro } from "react-icons/fa";
// import { AiOutlineX } from "react-icons/ai";
// import { FaWhatsapp } from "react-icons/fa";
// import Logo from '../../assets/Images/signup-logo.png'
// import Aos from 'aos';
// import "aos/dist/aos.css";

// const Footer = () => {
//     useEffect(() => {
//         Aos.init()
//     }, [])
//     return (
//         <footer data-aos="fade-down" className='footer'>
//       <div className="wrapper">
//         <div className="description">
//           <div>
//             <img src={Logo} alt="" className='logo'/>
//           </div>

//           <section className='instruction'>
//               <div className="Intouch">
//                 <h3>GET IN TOUCH</h3>
//                 <p>Plot 2055, Green Estate, Amuwo Odofin,
//                 Lagos.</p>
//                 <p>+2347062810942</p>
//                 <p>info@nectrabuzz.com</p>
//                 <span>
//                 <FaCameraRetro fontSize={'20px'} color='white'/>
//                 <AiOutlineX fontSize={'20px'} color='white'/>
//                 <FaWhatsapp fontSize={'20px'} color='white'/>
//                 </span>
//               </div>




//               <div className="Intouch">
//                 <h3>INFORMATION</h3>
//                 <p>About Us</p>
//                 <p>Our Blog</p>
//                 <p>Privacy Policy</p>
//                 <p>Terms & Condition</p>
//               </div>


//               <div className="Intouch">
//                 <h3>SUPPORT</h3>
//                 <p>FAQs</p>
//                 <p>Track Order</p>
//                 <p>Jar Size Guide</p>
//                 <p>Return Policy</p>
//                 <p>Shipping & Delivery</p>
//               </div>

//           </section>

//         </div>
//         <p>NectarBuzz Nigeria, Designed by Group 5 Zephora Nigeria, Designed by Group 1 </p>
//       </div>





//       {/* GET IN TOUCH



// */}
//     </footer>
//     )
// }

// export default Footer

// // import React from 'react';
// // import './Footer.css'; // Importing CSS file

// // const Footer = () => {
// //   return (
// //     <footer className="footer">
// //       <div className="container">
// //         <div className="row">
// //           {/* Get in Touch Column */}
// //           <div className="column get-in-touch">
// //             <h3>GET IN TOUCH</h3>
// //             <p>Plot 2055, Green Estate, Amuwo Odofin, Lagos</p>
// //             <p>+2347062810942</p>
// //             <a href="mailto:info@nectarbuzz.com">info@nectarbuzz.com</a>
// //             {/* Social Media Icons */}
// //             <div className="social-icons">
// //               <a href="#"><i className="fab fa-facebook-f"></i></a>
// //               <a href="#"><i className="fab fa-twitter"></i></a>
// //               <a href="#"><i className="fab fa-instagram"></i></a>
// //             </div>
// //           </div>

// //           {/* Information Column */}
// //           <div className="column information">
// //             <h3>INFORMATION</h3>
// //             <ul>
// //               <li><a href="#">About Us</a></li>
// //               <li><a href="#">Our Product</a></li>
// //               <li><a href="#">Terms & Policy</a></li>
// //               <li><a href="#">Privacy & Condition</a></li>
// //             </ul>
// //           </div>

// //           {/* Support Column */}
// //           <div className="column support">
// //             <h3>SUPPORT</h3>
// //             <ul>
// //               <li><a href="#">FAQs</a></li>
// //               <li><a href="#">Track Order</a></li>
// //               <li><a href="#">Return Policy</a></li>
// //               <li><a href="#">Size Guide</a></li>
// //               <li><a href="#">Shipping & Delivery</a></li>
// //             </ul>
// //           </div>
// //         </div>

// //         {/* Copyright Notice */}
// //         <div className="copyright">
// //           © NectarBuzz Nigeria, Designed by Group 5
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Footer;


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