import React from 'react';
import './OurBeekeepers.css';
import farmer1 from '../../assets/Images/Nectar-Buzz/Frame 1901.png';
import farmer2 from '../../assets/Images/Nectar-Buzz/Frame 1882.png';
import farmer3 from '../../assets/Images/Nectar-Buzz/Frame 1880.png';
import farmer4 from '../../assets/Images/Nectar-Buzz/Frame 1879.png';

const OurBeekeepers = () => {
    return (
        <div className="MeetBeeKeepers">
            <h1>MEET OUR BEEKEEPERS</h1>
            <div className="BeeKeepers">
                <div className="OurBeeKeeper">
                    <img src={farmer1} alt="Doris Ifeola" className='beekeeper'/>
                    <div className="beeText">
                        <h3>Doris Ifeola</h3>
                        <p>Doris is a dedicated beekeeper in Ogun, Nigeria. Her passion for bees has led to thriving colonies and top-quality honey.</p>
                    </div>
                </div>

                <div className="OurBeeKeeper">
                    <img src={farmer2} alt="Joseph Adahka" className='beekeeper'/>
                    <div className="beeText">
                        <h3>Joseph Adahka</h3>
                        <p>Joseph is a skilled beekeeper in Ogun, Nigeria. With years of expertise, he is known for sustainable practices and local respect.</p>
                    </div>
                </div>
            </div>

            <div className="BeeKeepers">
                <div className="OurBeeKeeper">
                    <img src={farmer4} alt="Chindeu Igwe" className='beekeeper'/>
                    <div className="beeText">
                        <h3>Chindeu Igwe</h3>
                        <p>Chinedu is a Lagos beekeeper with vast knowledge of bees. His passion for raw honey has earned him local recognition.</p>
                    </div>
                </div>

                <div className="OurBeeKeeper">
                    <img src={farmer3} alt="Cassandra Taiwo" className='beekeeper'/>
                    <div className="beeText">
                        <h3>Cassandra Taiwo</h3>
                        <p>Cassandra, a skilled honey harvester in Nigeria, is known for extracting honey safely and producing high-quality products.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBeekeepers;