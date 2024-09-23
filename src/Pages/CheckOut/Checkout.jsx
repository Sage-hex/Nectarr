import React from 'react'
import './CheckOut.css'
import CheckOutForm from '../../Components/CheckOutForm/CheckOutForm'
import CheckoutItems from '../../Components/Checkout-Item/CheckoutItems'

const Checkout = () => {
  return (
    <div className='CheckOut'> 
       <div className="checkOutWrap">
        <CheckOutForm/>
        <CheckoutItems/>hh

       </div>
    </div>
  )
}

export default Checkout
