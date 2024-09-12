import React from 'react'
import './Features.css'
import bee1 from '../../assets/Images/Nectar-Buzz/bee1.png';
import honey from '../../assets/Images/Nectar-Buzz/honey1.png';
import feature1 from '../../assets/Images/Nectar-Buzz/feature1.png'
import feature2 from '../../assets/Images/Nectar-Buzz/feature2.png'
import features from '../../assets/Images/Nectar-Buzz/features.png'

import bee2 from '../../assets/Images/Nectar-Buzz/bee2.png';

const FeaturesBox = () => {
    return (
        <div className="featuresBox">
       <img src={feature1} alt="" className="features" data-aos="fade-right" />
       <img src={feature2} alt="" className="features" data-aos="fade-down" />
       <img src={features} alt="" className="features" data-aos="fade-left" />
    
      </div>
    )
}

export default FeaturesBox