import React from 'react'
import './Message.css'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Message = () => {
    const nav = useNavigate()
  return (
    <div className='Message'>
       <h2>Please Leave A Message</h2>
       <div className="Messages">
          <textarea name="message" id="" placeholder='Write a message'></textarea>
          <button onClick={()=>toast.success('message sent successfully')}>send</button>
       </div>

       <button className='decline' onClick={()=>nav('/')}>HomePage</button>
       <Toaster/>
    </div>
  )
}

export default Message
