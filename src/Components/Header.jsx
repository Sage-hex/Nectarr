import {useState} from 'react'
import '../Pages/LandingPage.css'
import { RxDropdownMenu } from 'react-icons/rx'
import Drop from '../Components/Drop';
import { FaCircleUser } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import './Header.css'


const Header = () => {
  const [show, setShow]= useState(false)

  return (
    <div className='header'>    
        <p>Hive <span className='hub'>Hub</span></p>
        <header>
          < RxDropdownMenu className='burger'/>
          <nav>
            <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>shops</li>
          </nav>
          <div className="account">
            <div className='phone'><FaPhoneVolume /> <span>07062810941</span></div>
            <FaCircleUser  className='icon'  onMouseEnter={()=> setShow(true)} />
            <BsCart3 fontSize={'20px'} />  
          </div>
        
          
        </header>

        {show && <Drop setShow={setShow}/>}
    </div>
  )
}

export default Header