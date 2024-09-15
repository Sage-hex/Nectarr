import React from 'react';
import honey1 from '../../assets/Images/Nectar-Buzz/honey1.png';
import HoneyDrop from '../../assets/Images/Nectar-Buzz/HoneyDrop.png';
import Drop from '../../assets/Images/Nectar-Buzz/Drop.png';
import honeypot from '../../assets/Images/Nectar-Buzz/honeypot.png';
import beeYourSelf from '../../assets/Images/Nectar-Buzz/input.png';
import Button from '../Button/Button'
import './DoYouKnow.css';

const DoYouKnow = () => {
    return (
        <div className="DoYouKnow">
            <h1>Did You Know</h1>
            <div className="Honeykick">
                <div className="HoneyCon">
                    <h2>Honey kicks off COLD</h2>
                    <img src={honeypot} alt="" className='honeyjar'/>
                    <h3>Mix 1 tablespoon of honey with 1 tablespoon of lemon juice.</h3>
                </div>

                <div className="HoneyCon">
                    <h2>Honey for DETOX</h2>
                    <img src={HoneyDrop} alt="" className='honeyjar'/>
                    <h3>For a detox, add 1-2 cups of honey to a cup of herbal tea.</h3>
                </div>

                <div className="HoneyCon">
                    <h2>Honey for SORE THROAT</h2>
                    <img src={Drop} alt="" className='honeyjar'/>
                    <h3>Honey soothes a sore throat when mixed in warm water.</h3>
                </div>
            </div>

            <div className="HFT">
                <div className="HoneyCon">
                    <h2>Honey for Toothache</h2>
                    <img src={honey1} alt="" className='honeyjar'/>
                    <h3>Mix 1 teaspoon of cinnamon with 1 teaspoon of honey.</h3>
                </div>

                <div className="newsletterForm">
                    {/*<h2>Bee Yourself</h2>*/}
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <Button type="submit">Subscribe</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DoYouKnow;