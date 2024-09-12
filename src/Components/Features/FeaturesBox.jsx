// import React from 'react'
// import './Features.css'
// import bee1 from '../../assets/Images/Nectar-Buzz/bee1.png';
// import honey from '../../assets/Images/Nectar-Buzz/honey1.png';

// import bee2 from '../../assets/Images/Nectar-Buzz/bee2.png';

// const FeaturesBox = () => {
//     return (
//         <div className="featuresBox">
//         <div className="features" data-aos="fade-right">
//           <img src={bee1} alt="" className='remove' />
//           <div className="text">
//             <h2>features 01</h2>
//             <p>Earn as you shop</p>
//           </div>
//         </div>
//         <div className="features two" data-aos="fade-down">
//           <img src={honey} alt="" className='remove bee2' />
//           <div className="text">
//             <h2>features 02</h2>
//             <p>Organic Honey</p>
//           </div>
//         </div>
//         <div className="features" data-aos="fade-left">
//           <img src={bee2} alt="" className='remove two' />
//           <div className="text">
//             <h2>features 03</h2>
//             <p>Discount on Delivery</p>
//           </div>
//         </div>
//       </div>
//     )
// }

// export default FeaturesBox


import React from 'react'
import './Features.css'
import featuresImageOne from '../../assets/Images/feature-image-one.png';
import featuresImageTwo from '../../assets/Images/feature-image-two.png';
import featuresImageThree from '../../assets/Images/feature-image-three.png';

const FeaturesBox = () => {
    return (
        <div className="featuresBox">
        <div className="features" data-aos="fade-right">
          <div className="feature-card-image-container">
          <img src={featuresImageOne} alt="" className='feature-card-image' />
          </div>
          <h2>features 01</h2>
            <p>providing genuine, unadulterated
honey</p>
        </div>
        <div className="features two" data-aos="fade-down">
        <div className="feature-card-image-container">
          <img src={featuresImageTwo} alt="" className='feature-card-image' />
          </div>
          <h2>features 0
        2</h2>
            <p>Visibility for beekeepers</p>

        </div>

        <div className="features" data-aos="fade-left">
        <div className="feature-card-image-container">
          <img src={featuresImageThree} alt="" className='feature-card-image' />
          </div>
          <h2>features 03</h2>
            <p>Varieties of Honey</p>
        </div>
      </div>
    )
}

export default FeaturesBox