import {useState} from 'react'
import { RxDropdownMenu } from 'react-icons/rx'
import Drop from '../DropDown/Drop';
import { FaCircleUser } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import './Header.css'
import Dropdown from '../DropDown/DropDown';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/Images/signup-logo.png'

const Header = () => {
  const [show, setShow]= useState(false)
  const [nav, setNav]= useState(false)


  return (
    <div className='header' >    
       <section className='section'>
        <p >Get 10% on your first Purchase. Sign Up to Mailing List</p>
       </section>
        <header>
          <img src={Logo} alt="" className='LOGO'/>
          <nav>
          <NavLink
           to="/"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? "active" : "notActive")}>
          <li>Home</li>
         </NavLink>
      
          <NavLink
          to="/about"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? "active" : "notActive")}
          >
          <li>About</li>
          </NavLink>
          <NavLink
          to="/shop"
          style={{ textDecoration: 'none' }}
          className={({ isActive }) => (isActive ? "active" : "notActive")}
          >
          <li>Shop</li>
          </NavLink>
          </nav>
          <div className="account">
            <div className='phone'><FaPhoneVolume /> <span>07062810941</span></div>
            <BsCart3 fontSize={'20px'} className='cart' />  
            <FaCircleUser  className='icon'  onMouseEnter={()=> setShow(true)} />

          </div>
          < RxDropdownMenu className='burger' onClick={()=>setNav(prenav => !prenav)}/>

        </header>
        {nav && <Dropdown setNav={setNav}/> }

        {show && <Drop setShow={setShow}/>}
    </div>
  )
}

export default Header
