import React from 'react'
import gain from '../../assets/Images/Nectar-Buzz/gain.png';
import './SeeMore.css'
import bee4 from '../../assets/Images/Nectar-Buzz/bee4.png';
import { GiScarabBeetle } from "react-icons/gi";
import beeIcon from '../../assets/Images/bee-icon.svg'


const SeeMore = () => {
    return (
        <div className='COlABO'>
    {/*<h1>SEE MORE...</h1>*/}
    <section className='Benefit'>
        <div className='see-more-image'>
           <img src={gain} alt="" className='Circle' data-aos="fade-right"/>
        </div>
       
        <div className="information one">
          <h1>Boost Your Immunity <br /> From Nature And EARN</h1>
             <p>Continue shopping at your favorite stores,<br/>
            both online and in-person.
            </p>
            <p>Earn rewards: Every purchase you make<br/> 
            will earn you points or cashback.</p>
            
            <p>Redeem rewards: Use your accumulated <br/>
            points or cashback to get discounts on <br/>
            <span className='see-more-text'>See More</span>
             </p>
            <h2>100% Organic</h2>
          
        </div>

    </section> 

    <section className='Benefit benefit-two'>
    <div className="information info-two" >
       <h1>Benefit of Pure Honey</h1>
       <p><span className='head-text'>H</span>oney is more than the natural sweetener.<br/>
       It provides magnesium to promote heart health <br/>
       and reduce inflammation. Helps your skin glow.<br/>
       Help relieve gastrointestinal tract conditions<br/>
       such as diarrhea associated with gastroenteritis</p>
       <ul>
         <div className='list'><img src={beeIcon} className='icon'/> <span>Promote respectful sleep</span></div>
         <div className='list'><img src={beeIcon} alt="bee-icon"/> <span>Cough and asthma management</span></div>
         <div className='list'><img src={beeIcon} alt="bee-icon"/><span>Wound Healing</span></div>
         <div className='list'><img src={beeIcon} alt="bee-icon"/> <span>Performance Enhancement</span></div>
       </ul>
     </div>
      <div className='see-more-image'>
      <img src={bee4} alt="" className='Circle' data-aos="fade-left"/>
        
      </div>
     
   </section>
  </div>
    )
}


export default SeeMore