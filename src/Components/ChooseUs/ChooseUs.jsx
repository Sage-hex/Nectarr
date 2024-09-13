import React from 'react'
import './ChooseUs.css'
import beekeeper from '../../assets/Images/Nectar-Buzz/beefarmer.png'

const ChooseUs = () => {
    return (
        <div className="whyUs">
            <h1>Why Choose Us</h1>
            <div className="bestOfAll">
                <div className="bestText">
                    <h2>We give You the Best</h2>
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
                <img src={beekeeper} alt="" className='bestimg'/>
            </div>
        </div>
    )
}
export default ChooseUs