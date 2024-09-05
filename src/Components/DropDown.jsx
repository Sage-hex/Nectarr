import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Dropdown.css'
// import './dropdown.css'
const Dropdown = ({setNav}) => {
    const nav = useNavigate()
   
  return (
    <div className='Drop'>
      <button className="del" onClick={()=>(setNav(false))}>X</button>
        <div>
           <li>Home</li>
            <li>About</li>
            <li>Product</li>
            <li>shops</li>
            <li onClick={()=>nav('/cart')}>Cart</li>
          
      
            <button onClick={()=>nav('/logout')}  className='logout'>Logoin</button>
            <button onClick={()=>nav('/singup')} className='signup'> SignUp</button>
         </div>
            
      
        
    </div>
  )
}

export default Dropdown