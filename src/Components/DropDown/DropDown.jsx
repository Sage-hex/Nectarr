import React from 'react'
import { useNavigate } from 'react-router-dom'
import './dropdown.css'
const Dropdown = ({setNav}) => {
    const nav = useNavigate()
  return (
    <div className='Drop'>
      <button className='del' onClick={()=>setNav(false)}>X</button>
        <div >
            <li onClick={()=>nav('/home')}>Home</li>
            <li onClick={()=>nav('/categories')}> vendors</li>
            <li onClick={()=>nav('/cart')}>Cart</li>
            <button onClick={()=>nav('/logout')}  className='logout'>Logout</button>
            <button onClick={()=>nav('/singup')} className='signup'> SignUp</button>
        </div>
    </div>
  )
}

export default Dropdown