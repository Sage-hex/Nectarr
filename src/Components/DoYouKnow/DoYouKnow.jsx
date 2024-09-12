import React from 'react'
import honey1 from '../../assets/Images/Nectar-Buzz/honey1.png'
import HoneyDrop from '../../assets/Images/Nectar-Buzz/HoneyDrop.png';
import Drop from '../../assets/Images/Nectar-Buzz/Drop.png';
import honeypot from '../../assets/Images/Nectar-Buzz/honeypot.png';
import beeYourSelf from '../../assets/Images/Nectar-Buzz/input.png'
import './DoYouKnow.css'

const DoYouKnow = () => {
    return ( <
        >
        <div className="DoYouKnow">
            <h1>Did You Know</h1>
            <div className="Honeykick">
                <div className="HoneyCon">
                    <h2>Honey kicks off COLD</h2>
                    <img src={Drop} alt="" className='honeyjar'/>
                    <h3>Honey kicks off COLD <br />
                      1 tablespoon of honey <br />
                      1 tablespoon of lemon juice</h3>
                </div>

                <div className="HoneyCon">
                    <h2>Honey for DETOX</h2>
                    <img src={HoneyDrop} alt="" className='honeyjar'/>
                    <h3>
                    1 cup of herbal tea <br />
                    1-2 cup of honey</h3>
                </div>

                <div className="HoneyCon">
                    <h2>Honey for SORE THROAT</h2>
                    <img src={honeypot} alt="" className='honeyjar'/>
                </div>
            </div>

        </div>


        <
        div className = "HFT" >
        <div className="HoneyCon">
                <h2>Honey for Toothache</h2>
                <img src={honey1} alt="" className='honeyjar'/>
                <h3>
                1 teaspon of cinnamon <br />
                1 teaspoon of honwy</h3>
            </div>

        <
        img src = { beeYourSelf } alt = ""
        className = ' beeYourSelf' / >

        <
        /div> <
        />
    )
}

export default DoYouKnow