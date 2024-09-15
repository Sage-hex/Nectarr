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
                    <img src={honeypot} alt="" className='honeyjar' data-aos="fade-down"data-aos-duration="1500"/>
                    <h3 data-aos="fade-left"data-aos-duration="3000">Mix 1 tablespoon of honey with 1 tablespoon of lemon juice.</h3>
                </div>

                <div className="HoneyCon">
                    <h2>Honey for DETOX</h2>
                    <img src={HoneyDrop} alt="" className='honeyjar' data-aos="fade-down"data-aos-duration="1500"/>
                    <h3 data-aos="fade-right">For a detox, add 1-2 cups of honey to a cup of herbal tea.</h3>
                </div>

                <div className="HoneyCon">
                    <h2>Honey for SORE THROAT</h2>
                    <img src={Drop} alt="" className='honeyjar' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
                    <h3 data-aos="fade-left"data-aos-duration="3000">Honey soothes a sore throat when mixed in warm water.</h3>
                </div>
            </div>

            <div className="HFT">
                <div className="HoneyCon">
                    <h2>Honey for Toothache</h2>
                    <img src={honey1} alt="" className='honeyjar' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
                    <h3 data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">Mix 1 teaspoon of cinnamon with 1 teaspoon of honey.</h3>
                </div>

                <div className="newsletterForm" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
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