import React from 'react'
import './OurBeekeepers.css'
import farmer1 from '../../assets/Images/Nectar-Buzz/Frame 1901.png'
import farmer2 from '../../assets/Images/Nectar-Buzz/Frame 1882.png'
import farmer3 from '../../assets/Images/Nectar-Buzz/Frame 1880.png'
import farmer4 from '../../assets/Images/Nectar-Buzz/Frame 1879.png'

const OurBeekeepers = () => {
  return (
    <div className="MeetBeeKeepers">
            <h1>MEET OUR BEEKEEPERS</h1>
            <div className="BeeKeepers">
                <div className="OurBeeKeeper">
                    <img src={farmer1} alt="" className='beekeeper'/>
                    <div className="beeText">
                        <h3>Doris Ifeola</h3>
                        <p>
                        Doris is a dedicated beekeeper based in Ogun, Nigeria. 
                        With a deep love for nature and a passion for bees, 
                        she has cultivated thriving bee colonies and produced 
                        high-quality honey. Known for her expertise and 
                        commitment to sustainable beekeeping practices, 
                        Doris is a respected figure in the local beekeeping 
                        community
                        </p>
                    </div>
                </div>

                <div className="OurBeeKeeper">
                    <img src={farmer2} alt="" className='beekeeper'/>
                    <div className="beeText">
                    <h3>Joseph Adahka</h3>
                        <p>
                        A Dedicated Beekeeper in Lagos State
                        Joseph is a passionate beekeeper based in Ogun State, Nigeria. 
                        With years of experience in caring for bees and harvesting 
                        honey, he is known for his expertise and commitment to
                        sustainable beekeeping practices. His dedication to preserving 
                        bees and their natural habitats has made him a respected figure
                        in the local community.
                        </p>
                    </div>
                </div>
            </div>


            <div className="BeeKeepers">
                <div className="OurBeeKeeper">
                    <img src={farmer4} alt="" className='beekeeper'/>
                    <div className="beeText">
                        <h3>Chindeu Igwe</h3>
                        <p>
                            A Lagos Beekeeper
                            Chinedu is a dedicated beekeeper based in Lagos, 
                            Nigeria. With a passion for apiculture who has vast 
                            knowledge of bees. He takes pride in grooming bees and is 
                            known cultivating raw honey. His commitment to sustainable 
                            beekeeping practices and his contributions to the local 
                            community have made him a respected figure in the 
                            Lagos beekeeping scene.
                        </p>
                    </div>
                </div>

                <div className="OurBeeKeeper">
                    <img src={farmer3} alt="" className='beekeeper'/>
                    <div className="beeText">
                        <h3>Cassandra Taiwo</h3>
                        <p>
                          A Skilled Honey Harvester
                          Ola is a dedicated honey harvester based in Nigeria. 
                          With years of experience working with bees, he possesses 
                          the expertise and skill to safely and efficiently extract honey
                          from hives. Ola is known for his meticulous approach and 
                          commitment to producing high-quality honey. His dedication 
                          to beekeeping and his contributions to the local honey industry
                          have earned him respect among his peers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OurBeekeepers