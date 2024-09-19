import React from 'react'
import './Order.css'

const Order = () => {
    const item =[1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]
  return (
    <div  className='OderReview'>
        <div className="order-hading">
            <div className="Orderhed">REF NO</div>
            <div className="Orderhed">CREATED</div>
            <div className="Orderhed">CREATED BY</div>
            <div className="Orderhed">CUSTOMER</div>
            <div className="Orderhed">STATUS</div>
            <div className="Orderhed">PAYMENT</div>
            <div className="Orderhed">DELIVERY STATUS</div>
        </div>

        <div className="Reviewed-body">
          {
            item.map(()=>(
                <>
                     <div className="main-Review">
                <div className="reviedtable">#TPL-240</div>
                <div className="reviedtable">6-8-2024</div>
                <div className="reviedtable">Helena</div>
                <div className="reviedtable">Iya Deji</div>
                <div className="reviedtable">recieved</div>
                <div className="reviedtable">discount</div>
                <div className="reviedtable">recieved</div>
            </div>
            <hr />
                </>
            ))
          }
        </div>
    </div>
  )
}

export default Order
