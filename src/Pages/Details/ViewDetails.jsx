import React from 'react'
import './ViewDetails.css'
// import Header from '../../../Components/Header/Header'
import { BiCar } from 'react-icons/bi'
import { BsArrowClockwise } from 'react-icons/bs'
import { BiBadgeCheck } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useParams  } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
const ViewDetails = () => {

  const dispatch = useDispatch()
  const [detailArray, setDetailArray] = useState({});
  const { id } = useParams();
  const  cart  = useSelector((state) => state?.cart)

  useEffect(() => {
    const catItems = cart.find((e) => e.id == id)
    setDetailArray(catItems)
  }, [id])

 return ( <>
   <div className='ViewDetails'>
      <div className="top">
        <h1>You are almost there</h1>
      </div>

      <main>
        <div className="main-wrap">
          <div className="Details-Requirement">
            <div className="left">
              <div className="image-Hold">
                {/* <img src={} alt="" /> */}
              </div>
            </div>
            <div className="right">
              <section>
                <h1>Manuka Honey -2.2Kg</h1>
                <br />
                <p>Product Code: <span>1234567</span></p>
                <p>Brand: <span>MGO</span></p>
                
              </section>
              <hr />


              <section>
                <h1>₦ 2, 500</h1>
                <h2 className='grey'>₦ 4,500</h2>
                <h2 className='green'> You Save ₦ 2,00</h2>
              </section>
              <hr />

              <section>
                <div className="QualityControl">
                  <h2>Quality</h2>
                  <div className="controls">
                    <button>-</button>
                    <button>1</button>
                    <button>+</button>
                  </div>
                </div>
                <div className="call">
                    <h3>Call For Bulk Purchase</h3>
                    <p color='brown'>08036229920</p>
                  </div>
               
              </section>
              <hr />
              <section>
                 <button className='addToCart'>ADD TO CART</button>
              </section>
              

            </div>
          </div>
          <aside>
            <section>
              <div className="space"></div>
              <p>Same day Delivery Availale in</p>
            </section>
            <hr />

            <section>
              <button className='Lagos'>Lagos</button>
              <br />
              <p className='orange'>Terms and Conditions Apply</p>
            </section>
            <hr />
            <section>
              <h2 className='return'>Delivery and return policy</h2>
              <div className='delivery'>
                <BiCar color='rgba(15, 180, 90, 0.726)'/>
                <span>delivery</span>
              </div>
              <div>Estimated Delivery day 1-3 business days</div>
              <div>Express Delivery Available</div>
            </section>
            <section>
              <h2 className='return'>Same Day Delivery</h2>
              <div>Please Place Order before 12pm <br /> Order Placed after 12pm w1ll be delievered the next day</div>
            </section>
            <section>
              <BsArrowClockwise color='rgba(24, 201, 104, 0.726)' fontSize={'20px'}/>
              <span className='return'>Return Policy</span>
              <div>Gauranteed 7 days return Policy <br /> For details about return <br />shipping Option .Please read</div>
            </section>
            <section>

            <BiBadgeCheck color='rgba(24, 201, 104, 0.726)' fontSize={'20px'}/>
            <span className='return'>Return Policy</span>
           
            </section>
          </aside>
        </div>
      </main>
    </div>
    </>
  )
}

export default ViewDetails