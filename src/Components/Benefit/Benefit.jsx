import React from 'react'
import '../SeeMore/SeeMore.css'
import bee4 from '../../assets/Images/Nectar-Buzz/bee4.png';
import { GiScarabBeetle } from "react-icons/gi";


const Benefit = () => {
  return (
    <section className='Benefit'>
    <div className="information">
       <h1>Benefit of Pure Honey</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis facere excepturi possimus aut.  Corrupti molestiae asperiores, alias enim deleniti beatae non accusamus quasi quibusdam odit tempore ullam,</p>
       <ul>
         <div className='list'><GiScarabBeetle className='icon'/> <span>Promote respectful sleep</span></div>
         <div className='list'><GiScarabBeetle className='icon'/> <span>Promote respectful sleep</span></div>
         <div className='list'><GiScarabBeetle className='icon'/><span>Promote respectful sleep</span></div>
         <div className='list'><GiScarabBeetle className='icon'/> <span>Promote respectful sleep</span></div>
       </ul>
     </div>
     <img src={bee4} alt="" className='Circle' data-aos="fade-left"/>
   </section>
  )
}

export default Benefit