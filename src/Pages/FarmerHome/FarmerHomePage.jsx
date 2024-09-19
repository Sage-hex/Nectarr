import React from 'react'
import './FarmerHomePage.css'
const FarmerHomePage = () => {
  return (
    <div className='FarmerHomePage'>
        <div className="FarmerHomePageTop">
            <div className="productUpload">
                <h2>Upload Product</h2>
                <img src="" alt=""  className='Uploaded-Product'/>
            </div>
            <div className="productDescription">
                <h2>Product Description</h2>

                <div className="Product-Details">
                  <h4>Product Name</h4>
                  <input type="text" />
                  <h4>Pricing</h4>
                  <input type="text" />
                  <h4>Quantity</h4>
                  <input type="text"  placeholder='₦'/>
                </div>

               
            </div>
        </div>
        

        <div className="FarmerHomePageBottom">
            <h2>Category</h2>
            <select name="" id="">
                <option>Product Category</option>
                <option>Single</option>
                <option>Hamper</option>
            </select>
        </div>

        <div className="button-holds">
          <button className='add'>Add Product</button>
          <button className='discard'>Discard</button>
        </div>
    </div>
  )
}

export default FarmerHomePage
