import React from 'react'
import './Congrats.css'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Congrats = () => {
    const nav = useNavigate()
  return (
    <div className='Congrats'>
        
       <div className="Congrats-Content">
         <h1>CONGRATULATIONS !!!</h1>
         <br />
         <p>Your account has been Successfully been Created</p>
         <br />
         <p>We are excited to welcome you to <span color='gold'>Nectar</span>Buzz community</p>
         <br />

         <p>
         Youre just one step away from getting Started. To complete Your registeration, please check your email inbox for a messsage from us with Instructions on how to Verify Your account.
         </p>

         <div className="back" onClick={()=>nav('/')}><BiArrowBack fontSize={'20px'} className='arrow'/> Back</div>
       </div>
    </div>
  )
}

export default Congrats
