import React from 'react'
import './Product.css'
import hamper from '../../assets/hamper.png'

const Product = () => {
    const items = [1,2,3,4,5,6,7,8,9,]
    return (
        <div className='OrderPage'>
            <div className="OrderTop">
                <h2>Available Product</h2>
                <button className='viewShop'>View Shop</button>
            </div>

            <div className="Order-Body">
                {
                    items.map(()=>(
                        <div className="OrderItem">
                            <img src={hamper} alt="" />
                        </div>
                    ))
                }
            </div>
		</div>
    )
}

export default Product