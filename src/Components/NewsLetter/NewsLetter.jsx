import React from 'react'
import './NewsLetter.css'
import Button from '../Button/Button';

const NewsLetter = () => {
    return (
        // <main className='newsletter-wrappper'>
        <section className="shop-newsletter">
                <h1>Subscribe and win Honey Hampers</h1>
                <form action="" method="get">
                    <div className="input-group">
                    <input type="text" placeholder='Email' required />
                        <Button>Send</Button>
                    </div>
                </form>
            </section>
        // </main>
    )
}

export default NewsLetter