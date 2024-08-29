import {useState} from 'react'
import { Link } from 'react-router-dom'

const Drop = ({setShow}) => {
  return (
    <div style={{
        width:'150px',
        height: '100px', 
        backgroundColor:'white', 
        boxShadow:'1px 2px 3px gray',
        position:'absolute',
        padding:'10px',
        top:'20%',
        right:'8%',
        cursor:'pointer',
        display:"flex",
        flexDirection:'column',
        gap:'10px',
        alignItems:'center',
        justifyContent:'center'
        }} onMouseLeave={()=>setShow(false)}>
           
           <p><Link to={'/login'}>LOGIN</Link></p>
           <p><Link to={'/signup'}>SIGN UP</Link></p>
        </div>
  )
}

export default Drop