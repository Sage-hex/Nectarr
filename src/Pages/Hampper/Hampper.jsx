import React from 'react'
import './Hampper.css'
// import HeroTextImage from '../../Components/HeroTextImage/HeroTextImage'
import HampperHero from '../../Components/HampperHero/HampperHero';
import SpecialOffer from '../../Components/SpecialOffer/SpecialOffer';
import HampperProduct from '../../Components/HampperProduct/HampperProduct';

const Hampper = () => {
    return (

        <main className='hampper-container'>
        <HampperHero/>
        <h1 className='hampper-title'>20% off, on 3 Hampers and ABOVE</h1>
        <SpecialOffer/>
        <HampperProduct/>
        </main>
    )
}

export default Hampper