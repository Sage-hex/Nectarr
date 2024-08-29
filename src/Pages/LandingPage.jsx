import {useState} from 'react'
import './LandingPage.css'
import { FaCircleUser } from "react-icons/fa6";
import freepik from '../assets/Images/freepik.avif'
import { GrCart } from "react-icons/gr";
import { TbCarSuv, TbMedal } from "react-icons/tb";
import { TfiMedall } from "react-icons/tfi";
import { RxDropdownMenu } from 'react-icons/rx'
import Drop from '../Components/Drop';

const LandingPage = () => {
  const [show, setShow]= useState(false)
  return (
    <div className='LandingPage'>
        <div className="welcomeHead">
            <div className='head'>
                <span>sell On <span className='eco'>ecoharvest</span></span>
            </div>
            <p>Welcome to ECOHARVEST<span className='eco'></span></p>
            <p>Refer a Friend and get #1K off</p>
        </div>

        <header>
          <div className="logo">Logo</div>
          <nav>
            <li>Home</li>
            <li>About</li>
            <li>Rewards</li>
          </nav>
          <div className="account">
            <FaCircleUser  className='icon'  onMouseEnter={()=> setShow(true)} />
            <span>Account</span>
          </div>
          < RxDropdownMenu className='burger'/>
        </header>

        {show && <Drop setShow={setShow}/>}

        <section className='Hero'>
            <h1>Every Details Is Organic </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque consectetur veniam expedita ipsam suscipit? Quaerat ipsa accusamus dolor beatae</p>
        </section>
        <section className='mid'>
           <h1>ALLOW FARMERS CATER TO YOUR NEEDS</h1>
        </section>
        <section className='product'>
          <div className="vegetables">
            <img src={freepik} alt="" className='first'/>
            <div className="text">
              <p>free Delivery </p>
              <TbCarSuv color='grey' fontSize={'30px'} />
            </div>
          </div>

          <div className="vegetables">
            <img src={freepik} alt="" className='second'/>
            <div className="text">
              <p>Easy to buy</p>
            <GrCart color='grey' fontSize={'30px'}/>
            </div>
          </div>
          <div className="vegetables">
            <img src={freepik} alt="" className='second'/>
            <div className="text">
              <p>Best Quality</p>
              < TfiMedall fontSize={'30px'} color='grey'/>
            </div>
          </div>
        </section>

        <section className='Fruit'>
          <div className="one">
            <div className="textBox">
               <h2>Commited To Giving <br /> You Top Quality <br /> Produce</h2>
             </div>
             <div className="Text">
              <h3>Explore Organic Produce</h3>
              <br />
              <p>Explore our world of quality, fresh, organic <br />and chemical free and safe Food foods and earn.</p>
             </div>
          </div>
          <div className="one">
             <img src={freepik} alt="" className='fruits' />
             <div className="Buttons">
               <button>VEGETABLES</button>
               <button>FRUITS</button>
               <button>SEA FOODS</button>
               <button>TUBERS</button>
             </div>
          </div>
        </section>


        <section className='product'>
           <div className="vegetables">
           <img src={freepik} alt="" className='second'/>
           <div className="list">
              <li>CrayFish</li>
             <li>Freshly Smoked and Seived</li>
              <li>5gram</li>
             <li>#2500</li>
           </div>
           </div>
           <div className="vegetables">
             <img src={freepik} alt="" className='second'/>
             <div className="list">
               <li>Banana</li>
               <li>Fresh and Ripe</li>
               <li>7gram</li>
               <li>#1500</li>
             </div>
           </div>
           <div className="vegetables">
             <img src={freepik} alt="" className='second'/> 
             <div className="list">
               <li>Fruit Combo</li>
               <li>Berries, Pineaple, pears</li>
               <li>12gram</li>
               <li>#3000</li>
             </div>
           </div>
        </section>
        <div className="space"></div>

    </div>
  )
}

export default LandingPage