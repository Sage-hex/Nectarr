import React from 'react'
import './Order.css'

const Order = () => {
    return (
        <div className='Summary'>
      <div className="orderSum">
        <h2>Order Summary</h2>
        <h2>Items()</h2>
      </div>
      <hr />
      <section className='delivery-Charges'>
        <h3>Delivery charges</h3>
        <div className='grey'>
            Add your Delivery <br />address at checkout to <br />see delivery
        </div>
      </section>
      <hr />

      <section className='total'>
            <h3>Subtotal: <span>₦</span></h3>
            <h1>Subtotal: <span>₦</span></h1>
      </section>
      <hr />


      <div className="free-delivery">
        <h3>Free delivery offer? Enter Code</h3>
        <button>Continue on checkout</button>
        <p>we accept</p>
        <div className="grey">Transaction are 100% safe and secured</div>
      </div>

    </div>
    )
}

export default Order