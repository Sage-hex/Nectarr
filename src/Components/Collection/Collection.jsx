import HoneyJar1 from '../../assets/Images/Nectar-Buzz/HoneyJar1.jpg';
import HoneyJar2 from '../../assets/Images/Nectar-Buzz/HoneyJar2.jpg';
import HoneyJar3 from '../../assets/Images/Nectar-Buzz/HoneyJar3.jpg';
import HoneyJar4 from '../../assets/Images/Nectar-Buzz/HoneyJar4.jpg';
import HoneyJar5 from '../../assets/Images/Nectar-Buzz/HoneyJar5.jpg';
import './Collection.css';

const Collection = () => {
    return (
        <div className="collections">
      <div className="text">
        <h1>Our Collections</h1>
        <p>We sell Organic Honey and 5 Kinds Of Honey</p>
      </div>

      <section className='items' data-aos="fade-up"data-aos-anchor-placement="bottom-bottom" data-aos-duration="2000">
        {[
          { src: HoneyJar1, title: 'Ifeola Clover Honey', description: 'Clover honey, a popular type of honey, has a rich history dating back centuries. Derived from the nectar of clover plants, this honey is prized for its mild flavor and light color.' },
          { src: HoneyJar2, title: 'Dagogo Wildflower Honey', description: 'Wildflower honey, a delightful and diverse type of honey, is produced from the nectar of various wildflower plants.' },
          { src: HoneyJar3, title: 'Maazi Manuka Honey', description: 'Manuka honey, a unique type of honey produced in Imo state, has gained worldwide recognition for its distinctive properties and potential health benefits.' },
          { src: HoneyJar4, title: 'Chinelo Honey', description: 'Chinelo Honey, a prized delicacy in the Eastern part of Nigeria, Abia state. It is produced from the nectar of tupelo trees. Known for its light color and mild, floral flavor, tupelo honey has a long history of being enjoyed for its unique taste and potential health benefits.' },
          { src: HoneyJar5, title: 'Sisi Acacia Honey', description: 'In the vast, sun-drenched plains of Ebonyi state, a colony of bees lived peacefully among the acacia trees. These trees, with their delicate yellow flowers, were a source of sustenance for the bees, providing them with nectar to produce their precious honey.' }
        ].map((item, index) => (
          <div className="boxhold" key={index} data-aos="zoom-in-up">
            <img src={item.src} alt={item.title} className='box' />
            <div className="box-text" data-aos="fade-up"
     data-aos-duration="3000">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
    );
};

export default Collection;