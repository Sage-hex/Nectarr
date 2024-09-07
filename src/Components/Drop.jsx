import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Aos from 'aos';
import "aos/dist/aos.css";

const Drop = ({setShow}) => {
  const [showheader, setShowheader]=useState(false)
  useEffect(()=>{
    Aos.init()
  },[])
  return (
    <div data-aos="zoom-in" style={{
        width:'130px',
        height: '100px', 
        backgroundColor:'white', 
        boxShadow:'1px 2px 3px gray',
        position:'absolute',
        padding:'10px',
        top:'17%',
        transition:'all 3000ms ease out',
        right:'1%',
        cursor:'pointer',
        display:"flex",
        flexDirection:'column',
        gap:'10px',
        alignItems:'center',
        justifyContent:'center'
        }} onMouseLeave={()=>setShow(false)}>
            {
              showheader ?     <button onClick={()=>nav('/logout')}  className='logout'>Logout</button> :
            <>
                <p style={{color:'black', textShadow:'2px 2px 3px grey', fontSize:'15px'}}><Link color='black' to={'/login'} >LOGIN</Link></p>
                <p style={{color:'black', textShadow:'2px 2px 3px grey',  fontSize:'15px'}}><Link color='black' to={'/signup'} >SIGN UP</Link></p>
            </>
}
         
        </div>
  )
}

export default Drop