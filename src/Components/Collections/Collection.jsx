import {useState} from 'react'
import HoneyJar1 from '../../assets/Images/Nectar-Buzz/HoneyJar1.jpg';
import HoneyJar2 from '../../assets/Images/Nectar-Buzz/HoneyJar2.jpg';
import HoneyJar3 from '../../assets/Images/Nectar-Buzz/HoneyJar3.jpg';
import HoneyJar4 from '../../assets/Images/Nectar-Buzz/HoneyJar4.jpg';
import HoneyJar5 from '../../assets/Images/Nectar-Buzz/HoneyJar5.jpg';
import './Collection.css'

const Collection = () => {

  const [show, setShow] = useState([false, false, false, false, false]);


    const handleMouseEnter = (index) => {
        const newShow = [...show];
        newShow[index] = true;
        setShow(newShow);
      };
      const handleMouseLeave = (index) => {
        const newShow = [...show];
        newShow[index] = false;
        setShow(newShow);
      };
  return (
    <div className="collections">
          <div className="text">
            <h1>Our Collections</h1>
            <p>We sell Organic Honey and 5 Kinds Of Honey</p>
          </div>

          <section className='items'>
            {[
              { src: HoneyJar1, title: 'Clover Honey', description: 'Clover honey, a popular type of honey, has a rich history dating back centuries. Derived from the nectar of clover plants, this honey is prized for its mild flavor and light color.' },
              { src: HoneyJar2, title: 'Wildflower Honey', description: 'Wildflower honey, a delightful and diverse type of honey, is produced from the nectar of various wildflower plants.' },
              { src: HoneyJar3, title: 'Manuka Honey', description: 'Manuka Honey, a unique type of honey produced in New Zealand, has gained worldwide recognition for its distinctive properties and potential health benefits.' },
              { src: HoneyJar4, title: 'Tupelo Honey', description: 'Tupelo honey, a prized delicacy in the Southern United States, is produced from the nectar of tupelo trees. Known for its light color and mild, floral flavor, tupelo honey has a long history of being enjoyed for its unique taste and potential health benefits.' },
              { src: HoneyJar5, title: 'Acacia Honey', description: 'In the vast, sun-drenched plains of Australia, a colony of bees lived peacefully among the acacia trees. These trees, with their delicate yellow flowers, were a source of sustenance for the bees, providing them with nectar to produce their precious honey.' }
            ].map((item, index) => (
              <div className="Boxhold" key={index}>
                <img src={item.src} alt="" className='box' onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)} />
                {show[index] && (
                  <div className="absolute" onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}>
                    <button className='Clover'>{item.title}</button>
                    <button className='viewMore'>view more</button>
                  </div>
                )}
                <div className="boxText">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
  )
}

export default Collection