import React from 'react'
import './mesaage.css'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Message = () => {
    const nav = useNavigate()
  return (
    <div className='Messager'>
       <h2>Please Leave A Message</h2>
       <div className="Messagess">
          <textarea name="message" id="" placeholder='Write a message'></textarea>
          <button onClick={()=>toast.success('message sent successfully')}>send</button>
       </div>

       <Toaster/>
    </div>
  )
}

export default Message
