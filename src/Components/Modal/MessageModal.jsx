import React from 'react'
import { useNavigate } from 'react-router-dom'

const MessageModal = ({setMessageModalOpen}) => {
    const nav = useNavigate()
  return (
    <div className="modal-overlay">
       <div className="modal-content">
          <h2>Product Approved</h2>
          <p>Dear Beekeeper, Your product have been approved</p>
          <div className="modal-actions">
          <button onClick={()=>nav('/shop')} >View Product</button>
          <button onClick={()=>setMessageModalOpen(false)}>Cancle</button>
          </div>
        </div>
    </div>
  )
}

export default MessageModal
