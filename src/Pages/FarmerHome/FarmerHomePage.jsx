// import React from 'react'
// import './FarmerHomePage.css'
// import { useState } from 'react'
// const FarmerHomePage = () => {
//   const [Images, setImages] = useState()
//   const [name, setName]= useState('')
//   const [pricing, setPricing]= useState('')
//   const [quantity, setQuantity]= useState('')
//   // const submit = () => {
//   //     alert('image have been uploaded successfully🤗')
//   //     nav('/login')
//   // }



//   const image = (e) => {
//       const file = e.target.files[0];
//       const Photo = URL.createObjectURL(file)
//       setImages(Photo)
//   }
//   return (
//     <div className='FarmerHomePage'>
//         <div className="FarmerHomePageTop">
//             <div className="productUpload">
//                 <h2>Upload Product</h2>
//                 <img src={Images} alt=""  className='Uploaded-Product'/>
//             </div>
//             <div className="productDescription">
//                 <h2>Product Description</h2>

//                 <div className="Product-Details">
//                   <h4>Product Name</h4>
//                   <input type="text" onChange={()=>setName(e.target.value)}/>
//                   <h4>Pricing</h4>
//                   <input type="text" placeholder='₦' onChange={()=>setName(e.target.value)}/>
//                   <h4>Quantity</h4>
//                   <input type="text"  onChange={()=>setName(e.target.value)}/>
//                 </div>


//             </div>
//         </div>


//         <div className="FarmerHomePageBottom">
//             <h2>Category</h2>
//             <select name="" id="">
//                 <option>Product Category</option>
//                 <option>Single</option>
//                 <option>Hamper</option>
//             </select>
//         </div>
//            <input type="file" hidden id='e' onChange={image} />
//            <label htmlFor="e" className='upload'>upload product image</label>

//         <div className="button-holds">
//           <button className='add'>Add Product</button>
//           <button className='discard'>Discard</button>
//         </div>
//     </div>
//   )
// }

// export default FarmerHomePage

import React, { useState } from 'react';
import './FarmerHomePage.css';
import toast, { Toaster } from 'react-hot-toast'

const FarmerHomePage = () => {
    const [images, setImages] = useState();
    const [name, setName] = useState('');
    const [pricing, setPricing] = useState('');
    const [quantity, setQuantity] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Product Category');

    const image = (e) => {
        const file = e.target.files[0];
        const photo = URL.createObjectURL(file);
        setImages(photo);
    };

    const handleAddProduct = () => {
        if (name && pricing && quantity && selectedCategory !== 'Product Category') {
            const newProduct = {
                name,
                pricing,
                quantity,
                category: selectedCategory,
                image: images
            };

            // Get existing products from local storage
            const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
            existingProducts.push(newProduct);

            // Save updated products back to local storage
            localStorage.setItem('products', JSON.stringify(existingProducts));

            // Reset fields after submission
            setImages('');
            setName('');
            setPricing('');
            setQuantity('');
            setSelectedCategory('Product Category');

            toast.success('Product added successfully!');
        } else {
            alert('Please fill in all fields and select a category.');
        }
    };

    return (
        <div className='FarmerHomePage'>
            <div className="FarmerHomePageTop">
                <div className="productUpload">
                    <h2>Upload Product</h2>
                    {images && <img src={images} alt="" className='Uploaded-Product' />}
                </div>
                <div className="productDescription">
                    <h2>Product Description</h2>
                    <div className="Product-Details">
                        <h4>Product Name</h4>
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
                        <h4>Pricing</h4>
                        <input type="text" placeholder='₦' onChange={(e) => setPricing(e.target.value)} value={pricing} />
                        <h4>Quantity</h4>
                        <input type="text" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
                    </div>
                </div>
            </div>

            <div className="FarmerHomePageBottom">
                <h2>Category</h2>
                <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                    <option>Product Category</option>
                    <option>Single</option>
                    <option>Hamper</option>
                </select>
            </div>
            <input type="file" hidden id='e' onChange={image} />
            <label htmlFor="e" className='upload'>Upload Product Image</label>

            <div className="button-holds">
                <button className='add' onClick={handleAddProduct}>Add Product</button>
                <button className='discard'>Discard</button>
            </div>
        </div>
    );
};

export default FarmerHomePage;


