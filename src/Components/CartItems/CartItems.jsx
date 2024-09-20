import React from 'react'
import './CartItems.css'
import { deleteCart, incrementQty, decrementQTY } from '../../Global/slice'
import { useDispatch, useSelector } from 'react-redux'

const CartItems = () => {

    const dispatch = useDispatch();
    const  cart  = useSelector((state) => state?.cart)
    const total = useSelector((state)=> state?.total)

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
            cart?.map((e, index)=>(
                <div className="main-cart" key={index}>
                <div className="image-box">
                    <img src={e.image} alt="" />
                </div>
                <div className="Controls">
                    <button onClick={()=>{dispatch(decrementQTY(e))}}>-</button>
                    <button>{e.QTY}</button>
                    <button onClick={()=>{dispatch(incrementQty(e))}}>+</button>
                </div>
    
                <div className="Controls">
                    <h1>{e.price}</h1>
                </div>
    
                <div className="Controls">
                    <h3 onClick={()=>{dispatch(deleteCart(e))}} style={{cursor:'pointer'}}>Remove Item</h3>
                </div>
             </div>
            ))
        }
      </div>
      
    </div>
    )
}

export default CartItems