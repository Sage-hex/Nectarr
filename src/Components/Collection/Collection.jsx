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

      <section className='items'>
        {[
          { src: HoneyJar1, title: 'Clover Honey', description: 'Mild and light-colored honey from clover plants, known for its sweet and delicate taste.' },
          { src: HoneyJar2, title: 'Wildflower Honey', description: 'Sweet honey with diverse flavors, made from nectar of various wildflowers and plants.' },
          { src: HoneyJar3, title: 'Manuka Honey', description: 'Unique honey from New Zealand, valued for its distinctive taste and potential health benefits.' },
          { src: HoneyJar4, title: 'Tupelo Honey', description: 'Light-colored honey from tupelo trees, appreciated for its mild floral flavor and purity.' },
          { src: HoneyJar5, title: 'Acacia Honey', description: 'Honey produced from acacia tree nectar, known for its clear appearance and subtle taste.' }
        ].map((item, index) => (
          <div className="boxhold" key={index}>
            <img src={item.src} alt={item.title} className='box' />
            <div className="box-text">
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