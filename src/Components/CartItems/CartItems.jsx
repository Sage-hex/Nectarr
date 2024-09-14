import React from 'react'
import './CartItems.css'

const CartItems = () => {

    const items = [1, 2, 3, 4, 5]
    return (

        <div className='CartItems'>
      <div className="CartItems-head">
        <div className="itemDetail">
            <h2>Items Details</h2>
        </div>
        <div className="qty">
            <h2>Quantity</h2>
        </div>
        <div className="qty">
            <h2>items</h2>
        </div>
        <div className="qty">
            <h2>Action</h2>
        </div>
      </div>
      <hr />

      

      <div className="Cart-body">
        {
            items.map(()=>(
                <div className="main-cart">
                <div className="image-box"></div>
                <div className="Controls">
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                </div>
    
                <div className="Controls">
                    <h1>₦ 2,500</h1>
                </div>
    
                <div className="Controls">
                    <h3>Remove Item</h3>
                </div>
             </div>
            ))
        }
      </div>
      
    </div>
    )
}

export default CartItems