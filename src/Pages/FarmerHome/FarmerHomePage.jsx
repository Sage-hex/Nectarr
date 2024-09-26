// import React, { useState } from 'react';
// import './FarmerHomePage.css';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// const FarmerHomePage = ({ farmerID, categoryID }) => {
//   const [formData, setFormData] = useState({
//     honeyName: '',
//     quantity: '',
//     price: '',
//     productPicture: null
//   });

//   console.log("FarmerID:",farmerID)
//   const [name, setName] = useState('');
//   const [pricing, setPricing] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [imagePreview, setImagePreview] = useState(null);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleDiscard = () => {
//     resetForm();
//     toast.info('Form cleared.');
//   };

//   const resetForm = () => {
//     setFormData({
//       honeyName: '',
//       quantity: '',
//       price: '',
//       productPicture: null
//     });
//     setSelectedCategory('');
//     setImagePreview(null);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({
//       ...formData,
//       productPicture: file
//     });

//     // Display image preview
//     const reader = new FileReader();
//     reader.onload = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const submitData = new FormData();
//     submitData.append('honeyName', formData.honeyName);
//     submitData.append('quantity', formData.quantity);
//     submitData.append('price', formData.price);
//     submitData.append('productPicture', formData.productPicture);

//     console.log('FormData:',formData)
//     try {
//       const response = await axios.post(`https://nectarbuzz.onrender.com/api/v1/product-post/${farmerID}`,submitData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.status === 201) {
//         setSuccess('Product created successfully!');
//         setError(null);

//         setFormData({
//           honeyName: '',
//           quantity: '',
//           price: '',
//           productPicture: null
//         });
//         setName('');
//         setPricing('');
//         setQuantity('');
//         setSelectedCategory('');
//         setImagePreview(null);
//         toast.success('Product added successfully!');
//       }
//     } catch (err) {
//       setError('An error occurred while creating the product. Please try again.');
//       setSuccess(null);
//       toast.error('Failed to add product!');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className='FarmerHomePage'>

//       <Toaster />
//       <div className="FarmerHomePageTop">
//         <div className="productUpload">
//           <h2>Upload Product</h2>
//           {imagePreview && <img src={imagePreview} alt="Uploaded product" className='Uploaded-Product' />}
//         </div>

//         <div className="productDescription">
//           <h2>Product Description</h2>
//           <div className="Product-Details">
//             <h4>Product Name</h4>
//             <input
//               type="text"
//               placeholder="Honey Name"
//               onChange={(e) => setFormData({ ...formData, honeyName: e.target.value })}
//               value={formData.honeyName}
//               required
//             />
//             <h4>Description</h4>
//             <input
//               placeholder="Product Description"
//               onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
//               value={formData.quantity}
//               required
//             />
//             <h4>Price</h4>
//             <input
//               type="number"
//               placeholder='₦'
//               onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//               value={formData.price}
//               required
//             />
//           </div>
//         </div>
//       </div>

//       <div className="FarmerHomePageBottom">
//         <h2>Category</h2>
//         <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
//           <option value="">Select Category</option>
//           <option value="Single">Single</option>
//           <option value="Hamper">Hamper</option>
//         </select>
//       </div>

//       <input type="file" hidden id='fileUpload' onChange={handleFileChange} />
//       <label htmlFor="fileUpload" className='upload'>Upload Product Image</label>

//       <div className="button-holds">
//         <button className='add' type='submit' >Add Product</button>
//         <button className='discard' onClick={handleDiscard}>Discard</button>
//       </div>
//     </form>
//   );
// };

// export default FarmerHomePage;

// import React, { useState } from 'react';
// import './FarmerHomePage.css';
// import axios from 'axios';
// import toast, { Toaster } from 'react-hot-toast';

// const FarmerHomePage = ({ farmerID }) => {
//     console.log("FarmerID:", farmerID)
//   const [formData, setFormData] = useState({
//     honeyName: '',
//     quantity: '',
//     price: '',
//     productPicture: null
//   });

//   const [imagePreview, setImagePreview] = useState(null);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState('');

//   const handleDiscard = () => {
//     resetForm();
//     toast.info('Form cleared.');
//   };

//   const resetForm = () => {
//     setFormData({
//       honeyName: '',
//       quantity: '',
//       price: '',
//       productPicture: null
//     });
//     setSelectedCategory('');
//     setImagePreview(null);
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData({
//       ...formData,
//       productPicture: file
//     });

//     const reader = new FileReader();
//     reader.onload = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const submitData = new FormData();
//     submitData.append('honeyName', formData.honeyName);
//     submitData.append('quantity', formData.quantity);
//     submitData.append('price', formData.price);
//     submitData.append('category', selectedCategory);
//     submitData.append('productPicture', formData.productPicture);

//     try {
//       const response = await axios.post(
//         `https://nectarbuzz.onrender.com/api/v1/product-post/66ef41a70333318213a8574b`,
//         submitData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         }
//       );

//       if (response.status === 201) {
//         setSuccess('Product created successfully!');
//         setError(null);
//         resetForm();
//         toast.success('Product added successfully!');
//       }
//     } catch (err) {
//       setError('An error occurred while creating the product. Please try again.');
//       setSuccess(null);
//       toast.error('Failed to add product!');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className='FarmerHomePage'>
//       <Toaster />
//       <div className="FarmerHomePageTop">
//         <div className="productUpload">
//           <h2>Upload Product</h2>
//           {imagePreview && <img src={imagePreview} alt="Uploaded product" className='Uploaded-Product' />}
//         </div>

//         <div className="productDescription">
//           <h2>Product Description</h2>
//           <div className="Product-Details">
//             <h4>Product Name</h4>
//             <input
//               type="text"
//               placeholder="Honey Name"
//               onChange={(e) => setFormData({ ...formData, honeyName: e.target.value })}
//               value={formData.honeyName}
//               required
//             />
//             <h4>Description</h4>
//             <input
//               placeholder="Product Description"
//               onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
//               value={formData.quantity}
//               required
//             />
//             <h4>Price</h4>
//             <input
//               type="number"
//               placeholder='₦'
//               onChange={(e) => setFormData({ ...formData, price: e.target.value })}
//               value={formData.price}
//               required
//             />
//           </div>
//         </div>
//       </div>

//       <div className="FarmerHomePageBottom">
//         <h2>Category</h2>
//         <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
//           <option value="">Select Category</option>
//           <option value="Single">Single</option>
//           <option value="Hamper">Hamper</option>
//         </select>
//       </div>

//       <input type="file" hidden id='fileUpload' onChange={handleFileChange} />
//       <label htmlFor="fileUpload" className='upload'>Upload Product Image</label>

//       <div className="button-holds">
//         <button className='add' type='submit' >Add Product</button>
//         <button className='discard' onClick={handleDiscard}>Discard</button>
//       </div>
//     </form>
//   );
// };

// export default FarmerHomePage;

import React, { useEffect, useState } from "react";
import "./FarmerHomePage.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux"; // Import useSelector to access Redux state
import { useDispatch } from "react-redux";
import farmerResData from "../../Global/slice";

const FarmerHomePage = () => {
  const dispatch = useDispatch();
  const { farmer } = useSelector((state) => state); // Access farmerID from Redux state
  console.log("FarmerID from Redux:", farmer._id);
  const farmerId = farmer._id;

  const [formData, setFormData] = useState({
    honeyName: "",
    quantity: "",
    price: "",
    productPicture: null,
  });

  const [name, setName] = useState("");
  const [pricing, setPricing] = useState("");
  const [quantity, setQuantity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleDiscard = () => {
    resetForm();
    toast.info("Form cleared.");
  };

  const resetForm = () => {
    setFormData({
      honeyName: "",
      quantity: "",
      price: "",
      productPicture: null,
    });
    setSelectedCategory("");
    setImagePreview(null);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      productPicture: file,
    });

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!farmerId) {
      toast.error("Farmer ID is missing! Please log in.");
      return;
    }

    const submitData = new FormData();
    submitData.append("honeyName", formData.honeyName);
    submitData.append("quantity", formData.quantity);
    submitData.append("price", formData.price);
    submitData.append("category", selectedCategory);
    submitData.append("productPicture", formData.productPicture);

    try {
      const response = await axios.post(
        `https://nectarbuzz.onrender.com/api/v1/product-post/${farmerId}`, // Use farmerID from Redux
        submitData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 201) {
        setSuccess("Product created successfully!");
        setError(null);
        resetForm();
        toast.success("Product added successfully!");
      }
    } catch (err) {
      setError(
        "An error occurred while creating the product. Please try again."
      );
      setSuccess(null);
      toast.error("Failed to add product!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="FarmerHomePage">
      <Toaster />
      <div className="FarmerHomePageTop">
        <div className="productUpload">
          <h2>Upload Product</h2>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Uploaded product"
              className="Uploaded-Product"
            />
          )}
        </div>

        <div className="productDescription">
          <h2>Product Description</h2>
          <div className="Product-Details">
            <h4>Product Name</h4>
            <input
              type="text"
              placeholder="Honey Name"
              onChange={(e) =>
                setFormData({ ...formData, honeyName: e.target.value })
              }
              value={formData.honeyName}
              required
            />
            <h4>Quantity</h4>
            <input
              type="number"
              placeholder="quantity"
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              value={formData.quantity}
              required
            />
            <h4>Price</h4>
            <input
              type="number"
              placeholder="₦"
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              value={formData.price}
              required
            />
          </div>
        </div>
      </div>

      <div className="FarmerHomePageBottom">
        <h2>Category</h2>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="">Select Category</option>
          <option value="Single">Single</option>
          <option value="Hamper">Hamper</option>
        </select>
      </div>

      <input type="file" hidden id="fileUpload" onChange={handleFileChange} />
      <label htmlFor="fileUpload" className="upload">
        Upload Product Image
      </label>

      <div className="button-holds">
        <button className="add" type="submit">
          Add Product
        </button>
        <button className="discard" onClick={handleDiscard}>
          Discard
        </button>
      </div>
    </form>
  );
};

export default FarmerHomePage;

// import React, { useState } from 'react';
// import './FarmerHomePage.css';
// import toast, { Toaster } from 'react-hot-toast'

// const FarmerHomePage = () => {
//     const [formData, setFormData] = useState({
//         honeyName: '',
//         description: '',
//         price: '',
//         productPicture: null
//       });

// const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const handleFileChange = (e) => {
//     setFormData({
//       ...formData,
//       productPicture: e.target.files[0]
//     });
//   };

// const handleSubmit = async (e) => {
//     e.preventDefault();

//     const submitData = new FormData();
//     submitData.append('honeyName', formData.honeyName);
//     submitData.append('description', formData.description);
//     submitData.append('price', formData.price);
//     submitData.append('productPicture', formData.productPicture);

//     try {
//       const response = await axios.post(/${farmerID}/product-post/${categoryID}, submitData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       if (response.status === 201) {
//         setSuccess('Product created successfully!');
//         setError(null);

//         setFormData({
//           honeyName: '',
//           description: '',
//           price: '',
//           productPicture: null,
//         });
//       }
//     } catch (err) {
//       setError('An error occurred while creating the product. Please try again.');
//       setSuccess(null);
//     }
//   };

//     return (
//         <div className='FarmerHomePage'>
//             <div className="FarmerHomePageTop">
//                 <div className="productUpload">
//                     <h2>Upload Product</h2>
//                     {images && <img src={images} alt="" className='Uploaded-Product' />}
//                 </div>
//                 <div className="productDescription">
//                     <h2>Product Description</h2>
//                     <div className="Product-Details">
//                         <h4>Product Name</h4>
//                         <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
//                         <h4>Pricing</h4>
//                         <input type="text" placeholder='₦' onChange={(e) => setPricing(e.target.value)} value={pricing} />
//                         <h4>Quantity</h4>
//                         <input type="text" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
//                     </div>
//                 </div>
//             </div>

//             <div className="FarmerHomePageBottom">
//                 <h2>Category</h2>
//                 <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
//                     <option>Product Category</option>
//                     <option>Single</option>
//                     <option>Hamper</option>
//                 </select>
//             </div>
//             <input type="file" hidden id='e' onChange={image} />
//             <label htmlFor="e" className='upload'>Upload Product Image</label>

//             <div className="button-holds">
//                 <button className='add' onClick={handleAddProduct}>Add Product</button>
//                 <button className='discard'>Discard</button>
//             </div>
//         </div>
//     );
// };

// export default FarmerHomePage;

// // import React, { useState } from 'react';
// // import toast from 'react-hot-toast';
// // import axios from 'axios'; // Import axios to handle API requests

// // const FarmerHomePage = () => {
// //   const [images, setImages] = useState(null);
// //   const [name, setName] = useState('');
// //   const [pricing, setPricing] = useState('');
// //   const [quantity, setQuantity] = useState('');
// //   const [selectedCategory, setSelectedCategory] = useState('Product Category');

// //   // Function to handle image upload and set state
// //   const image = (e) => {
// //     const file = e.target.files[0];
// //     const photo = URL.createObjectURL(file);
// //     setImages(photo);
// //   };

// //   // Function to handle product form submission
// //   const handleAddProduct = async () => {
// //     if (name && pricing && quantity && selectedCategory !== 'Product Category') {
// //       try {
// //         const newProduct = {
// //           name,
// //           price: pricing,
// //           quantity,
// //           category: selectedCategory,
// //           image: images,
// //         };

// //         // POST request to your API endpoint to save the product
// //         const response = await axios.post('https://nectarbuzz.onrender.com/api/v1/:farmerID/product-post/', newProduct);

// //         if (response.status === 201) {
// //           toast.success('Product added successfully');
// //         }

// //         // Reset form fields
// //         setName('');
// //         setPricing('');
// //         setQuantity('');
// //         setSelectedCategory('Product Category');
// //         setImages(null);
// //       } catch (error) {
// //         console.error('Error adding product:', error);
// //         toast.error('Failed to add product');
// //       }
// //     } else {
// //       toast.error('Please fill out all fields');
// //     }
// //   };

// // //   const handleAddProduct = async () => {
// // //     if (name && pricing && quantity && selectedCategory !== 'Product Category') {
// // //         const formData = new FormData();
// // //         formData.append('honeyName', name);
// // //         formData.append('description', 'Product description here');
// // //         formData.append('price', pricing);
// // //         formData.append('quantity', quantity);
// // //         formData.append('categoryID', categoryID); // Assuming categoryID from select options
// // //         formData.append('productPicture', images);  // Add the image file

// // //         try {
// // //             const response = await axios.post(
// // //                 `https://nectarbuzz.onrender.com/api/v1/${farmerID}/product-post/${categoryID}`,
// // //                 formData,
// // //                 {
// // //                     headers: {
// // //                         'Content-Type': 'multipart/form-data',
// // //                     },
// // //                 }
// // //             );

// // //             if (response.status === 201) {
// // //                 toast.success('Product added successfully via API!');
// // //                 // Reset form after success
// // //                 setImages('');
// // //                 setName('');
// // //                 setPricing('');
// // //                 setQuantity('');
// // //                 setSelectedCategory('Product Category');
// // //             }
// // //         } catch (error) {
// // //             toast.error('Failed to add product. Please try again.');
// // //             console.error(error);
// // //         }
// // //     } else {
// // //         alert('Please fill in all fields and select a category.');
// // //     }
// // // };
// //   return (
// //     <div className="farmer-home-page">
// //       <h1>Add a Product</h1>

// //       <div className="image-upload">
// //         <label htmlFor="image">Upload Product Image</label>
// //         <input type="file" onChange={image} />
// //         {images && <img src={images} alt="Preview" />}
// //       </div>

// //       <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Product Name" />
// //       <input type="number" value={pricing} onChange={(e) => setPricing(e.target.value)} placeholder="Product Pricing" />
// //       <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Product Quantity" />

// //       <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
// //         <option>Product Category</option>
// //         <option>Single</option>
// //         <option>Hamper</option>
// //       </select>

// //       <button onClick={handleAddProduct}>Add Product</button>
// //     </div>
// //   );
// // };

// // export default FarmerHomePage;

// //     import React, { useState } from 'react';
// // import './FarmerHomePage.css';
// // import toast, { Toaster } from 'react-hot-toast'

// // const FarmerHomePage = () => {
// //     const [images, setImages] = useState();
// //     const [name, setName] = useState('');
// //     const [pricing, setPricing] = useState('');
// //     const [quantity, setQuantity] = useState('');
// //     const [selectedCategory, setSelectedCategory] = useState('Product Category');

// //     const image = (e) => {
// //         const file = e.target.files[0];
// //         const photo = URL.createObjectURL(file);
// //         setImages(photo);
// //     };

// //     const handleAddProduct = () => {
// //         if (name && pricing && quantity && selectedCategory !== 'Product Category') {
// //             const newProduct = {
// //                 name,
// //                 pricing,
// //                 quantity,
// //                 category: selectedCategory,
// //                 image: images
// //             };
// //             console.log(newProduct)

// //             // Get existing products from local storage
// //             const existingProducts = JSON.parse(localStorage.getItem('products')) || [];
// //             existingProducts.push(newProduct);

// //             // Save updated products back to local storage
// //             localStorage.setItem('products', JSON.stringify(existingProducts));

// //             // Reset fields after submission
// //             setImages('');
// //             setName('');
// //             setPricing('');
// //             setQuantity('');
// //             setSelectedCategory('Product Category');

// //             toast.success('Product added successfully!');
// //         } else {
// //             alert('Please fill in all fields and select a category.');
// //         }
// //     };

// //     return (
// //         <div className='FarmerHomePage'>
// //             <div className="FarmerHomePageTop">
// //                 <div className="productUpload">
// //                     <h2>Upload Product</h2>
// //                     {images && <img src={images} alt="" className='Uploaded-Product' />}
// //                 </div>
// //                 <div className="productDescription">
// //                     <h2>Product Description</h2>
// //                     <div className="Product-Details">
// //                         <h4>Product Name</h4>
// //                         <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
// //                         <h4>Pricing</h4>
// //                         <input type="text" placeholder='₦' onChange={(e) => setPricing(e.target.value)} value={pricing} />
// //                         <h4>Quantity</h4>
// //                         <input type="text" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="FarmerHomePageBottom">
// //                 <h2>Category</h2>
// //                 <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
// //                     <option>Product Category</option>
// //                     <option>Single</option>
// //                     <option>Hamper</option>
// //                 </select>
// //             </div>
// //             <input type="file" hidden id='e' onChange={image} />
// //             <label htmlFor="e" className='upload'>Upload Product Image</label>

// //             <div className="button-holds">
// //                 <button className='add' onClick={handleAddProduct}>Add Product</button>
// //                 <button className='discard'>Discard</button>
// //             </div>
// //         </div>
// //     );
// // };

// // export default FarmerHomePage;

// //  <div className="FarmerHomePageTop">
// //                  <div className="productUpload">
// //                      <h2>Upload Product</h2>
// //                      {images && <img src={images} alt="" className='Uploaded-Product' />}
// //                  </div>
// //                  <div className="productDescription">
// //                      <h2>Product Description</h2>
// //                      <div className="Product-Details">
// //                         <h4>Product Name</h4>
// //                          <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
// //                          <h4>Pricing</h4>
// //                          <input type="text" placeholder='₦' onChange={(e) => setPricing(e.target.value)} value={pricing} />
// //                          <h4>Quantity</h4>
// //                          <input type="text" onChange={(e) => setQuantity(e.target.value)} value={quantity} />
// //                      </div>
// //                  </div>
// //              </div>
// //             <div className="FarmerHomePageBottom">
// //                 <h2>Category</h2>
// //                 <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
// //                     <option>Product Category</option>
// //                     <option>Single</option>
// //                     <option>Hamper</option>
// //                 </select>
// //             </div>
// //             <input type="file" hidden id='e' onChange={image} />
// //             <label htmlFor="e" className='upload'>Upload Product Image</label>

// //             <div className="button-holds">
// //                 <button className='add' onClick={handleAddProduct}>Add Product</button>
// //                 <button className='discard'>Discard</button>
// //             </div>
