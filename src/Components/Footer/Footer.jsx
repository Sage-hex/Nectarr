import { useEffect } from 'react'
import './Footer.css'
// import { FaCircleUser } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Logo from '../../assets/Images/signup-logo.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <footer data-aos="fade-down" className='footer'>
      <div className="wrapper">
        <div className="description">
          <div>
            <img src={Logo} alt="" className='logo'/>
          </div>

          <section className='instruction'>
              <div className="Intouch">
                <h3>GET IN TOUCH</h3>
                <p>Plot 2055, Green Estate, Amuwo Odofin,
                Lagos.</p>
                <p>+2347062810942</p>
                <p>info@nectrabuzz.com</p>
                <span>
                <FaCameraRetro fontSize={'20px'} color='white'/>
                <AiOutlineX fontSize={'20px'} color='white'/>
                <FaWhatsapp fontSize={'20px'} color='white'/>
                </span>
              </div>


              

              <div className="Intouch">
                <h3>INFORMATION</h3>
                <p>About Us</p>
                <p>Our Blog</p>
                <p>Privacy Policy</p>
                <p>Terms & Condition</p>
              </div>


              <div className="Intouch">
                <h3>SUPPORT</h3>
                <p>FAQs</p>
                <p>Track Order</p>
                <p>Jar Size Guide</p>
                <p>Return Policy</p>
                <p>Shipping & Delivery</p>
              </div>

          </section>

        </div>
        <p>NectarBuzz Nigeria, Designed by Group 5 Zephora Nigeria, Designed by Group 1 </p>
      </div>



      
     
      {/* GET IN TOUCH

   

*/}
    </footer>
    )
}

export default Footer

// import React from 'react';
// import './Footer.css'; // Importing CSS file

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           {/* Get in Touch Column */}
//           <div className="column get-in-touch">
//             <h3>GET IN TOUCH</h3>
//             <p>Plot 2055, Green Estate, Amuwo Odofin, Lagos</p>
//             <p>+2347062810942</p>
//             <a href="mailto:info@nectarbuzz.com">info@nectarbuzz.com</a>
//             {/* Social Media Icons */}
//             <div className="social-icons">
//               <a href="#"><i className="fab fa-facebook-f"></i></a>
//               <a href="#"><i className="fab fa-twitter"></i></a>
//               <a href="#"><i className="fab fa-instagram"></i></a>
//             </div>
//           </div>

//           {/* Information Column */}
//           <div className="column information">
//             <h3>INFORMATION</h3>
//             <ul>
//               <li><a href="#">About Us</a></li>
//               <li><a href="#">Our Product</a></li>
//               <li><a href="#">Terms & Policy</a></li>
//               <li><a href="#">Privacy & Condition</a></li>
//             </ul>
//           </div>

//           {/* Support Column */}
//           <div className="column support">
//             <h3>SUPPORT</h3>
//             <ul>
//               <li><a href="#">FAQs</a></li>
//               <li><a href="#">Track Order</a></li>
//               <li><a href="#">Return Policy</a></li>
//               <li><a href="#">Size Guide</a></li>
//               <li><a href="#">Shipping & Delivery</a></li>
//             </ul>
//           </div>
//         </div>

//         {/* Copyright Notice */}
//         <div className="copyright">
//           © NectarBuzz Nigeria, Designed by Group 5
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;