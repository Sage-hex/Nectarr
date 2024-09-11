import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Dropdown.css'
const Dropdown = ({setNav}) => {
    const nav = useNavigate()
    const route=()=>{
      nav('/')
      setNav(false)
    }

    const route2=()=>{
      nav('/about')
      setNav(false)
    }

    const route3=()=>{
      nav('/shop')
      setNav(false)
    }
    const route4=()=>{
      nav('/signup')
      setNav(false)
    }
  return ( 
    <div className='Drop'>
      <button className='del' onClick={()=>setNav(false)}>X</button>
        <div >
            <li onClick={route}>Home</li>
            <li onClick={route2}> About</li>
            <li onClick={route3} >Shop</li>
            <button onClick={()=>nav('/logout')}  className='logout'>Logout</button>
            <button onClick={()=>nav('/singup')} className='signup'> SignUp</button>
        </div>
    </div>
  )
}

export default Dropdown
