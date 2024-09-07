import React from 'react'
import Header from '../Components/Header'
import './About.css'
import bee3 from '../assets/Images/Nectar-Buzz/bee3.png'
import honey1 from '../assets/Images/Nectar-Buzz/honey1.png'
import mamaruka from '../assets/Images/Nectar-Buzz/mamaruka.jpg'
import Origin from '../Components/Origin'
import Footer from '../Components/Footer'
import Helen from '../assets/Images/remove.png'


const About = () => {
  return (
    <div className='AboutPage'>
        <div className="About">
          <Header/>
           <div className="hero">
                <img src={honey1} alt="" className='honey1'/>
             <div className="heroLeft">
                   <div className="heroMessage">
                      <h1>Nature's <span>Golden</span><span>Buzz</span></h1>
                      <h1>100% Organic</h1>
                      <button>shop Now</button>
                   </div>
              </div>
              <div className="heroLeft">
                  x
              </div>
           </div>
        </div>


        <div className="AboutUs">
            <h1>About Us</h1>
            <div className="about">
                <div className="aboutText">
                    <p>
                       Discover the Sweetness of Nature
                       Nestles in the heart of Lagos, Nectar Buzz is your go-to
                       destination for the finest honey in town. We are passionate   
                       about bringing you the purest, most delicious honey,
                       sourced directly frm local beekeepers. We are dedicated to
                       bringing you the purest honey straight from local beekeepers.
                       Our mission is to  promote the benefits of honey while supporting
                       sustainable beekeeping practices.
                    </p>
                </div>

                <div className="aboutImg">
                    <img src={Helen} alt="" className='round'/>
                    <img src={Helen} alt="" className='round'/>
                    <img src={Helen} alt="" className='round'/>
                    <img src={Helen} alt="" className='round'/>
                    <img src={Helen} alt="" className='round'/>
                </div>
            </div>
        </div>


        <div className="whyUs">
            <h1>Why Choose Us</h1>
            <div className="bestOfAll">
                <div className="bestText">
                    <p>we give You the Best</p>
                    <li>
                        Pure and Natural Honey: Our honey is free from artificial additives 
                        and preservatives, ensuring a taste that's as pure as nature intended.
                    </li>
                    <li>
                        Locally Sourced: We support local beekeepers and contribute to the
                        sustainability of our ecosystem.
                    </li>
                    <li>
                       Locally Sourced: We support local beekeepers and contribute to the
                       sustainability of our ecosystem.
                    </li>
                    <li>
                        Wide Variety: From raw honey to flavored varieties, we offer 
                        a diverse selection to suit every taste.
                    </li>
                    <li>
                        Competitive Prices: Enjoy high-quality honey without breaking the bank.
                    </li>
                    <p>
                        Experience the Sweetness of Life
                        Whether you're a honey connoisseur or simply looking for a natural sweetener, 
                        Nectar Buzz has something for everyone. Visit our store or shop online to
                        discover the pure joy of our honey.
                    </p>
                </div>
                <img src={mamaruka} alt="" className='bestimg'/>
            </div>
        </div>


        <div className="MeetBeeKeepers">
            <h1>MEET OUR BEEKEEPERS</h1>
            <div className="BeeKeepers">
                <div className="OurBeeKeeper">
                    <img src={mamaruka} alt="" className='beekeeper'/>
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
                    <img src={mamaruka} alt="" className='beekeeper'/>
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
                    <img src={mamaruka} alt="" className='beekeeper'/>
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
                    <img src={mamaruka} alt="" className='beekeeper'/>
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



        <div className="DoYouKnow">
            <h1>Did You Know</h1>
            <div className="Honeykick">
                <div className="HoneyCon">
                    <h3>Honey kicks off COLD</h3>
                    <img src={honey1} alt="" className='honeyjar'/>
                    <p>Honey kicks off COLD
                      1 tablespoon of honey <br />
                      1 tablespoon of lemon juice</p>
                </div>

                <div className="HoneyCon">
                    <h3>Honey for DETOX</h3>
                    <img src={honey1} alt="" className='honeyjar'/>
                    <p>
                    1 cup of herbal tea <br />
                    1-2 cup of honey</p>
                </div>

                <div className="HoneyCon">
                    <h3>Honey for SORE THROAT</h3>
                    <img src={honey1} alt="" className='honeyjar'/>
                </div>
            </div>

        </div>


        <div className="HFT">
            <div className="HoneyCon">
                <h3>Honey for Toothache</h3>
                <img src={honey1} alt="" className='honeyjar'/>
                <p>
                1 teaspon of cinnamon <br />
                1 teaspoon of honwy</p>
            </div>

            <div className="beeYourSelf">
                <input type="text" placeholder='name'/>
                <input type="text" placeholder='name'/>
            </div>
        </div>

        <Origin/>
        <Footer/>
         

    </div>
  )
}

export default About
