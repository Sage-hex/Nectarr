<<<<<<< HEAD:src/Components/Footer/Footer.jsx
import {useEffect} from 'react'
import './footer.css'
// import { FaCircleUser } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Logo from '../../assets/Images/signup-logo.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(()=>{
        Aos.init()
      },[])
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

=======
import {useEffect} from 'react'
import './footer.css'
// import { FaCircleUser } from "react-icons/fa6";
import { FaCameraRetro } from "react-icons/fa";
import { AiOutlineX } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Logo from '../../assets/Images/signup-logo.png'
import Aos from 'aos';
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(()=>{
        Aos.init()
      },[])
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

>>>>>>> main:src/Components/Footer.jsx
export default Footer