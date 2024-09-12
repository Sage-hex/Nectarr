import React, { useState, useEffect } from 'react';
import './HampperHero.css';

const HampperHero = () => {
    const phrases = [
        "WELCOME TO HAMPER DEALS!",
        "FIND YOUR PERFECT HAMPER!",
        "EXCLUSIVE DISCOUNTS ON HAMPERS!",
        "SHOP NOW AND GIFT A HAMPER!"
    ];

    const [text, setText] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(150); // Typing speed

    useEffect(() => {
        const handleTyping = () => {
            const currentPhrase = phrases[currentPhraseIndex];

            if (isDeleting) {
                setText(prev => prev.slice(0, prev.length - 1)); // Remove a character
                setSpeed(50); // Speed up when deleting
            } else {
                setText(prev => currentPhrase.slice(0, prev.length + 1)); // Add a character
                setSpeed(150); // Normal speed when typing
            }

            if (!isDeleting && text === currentPhrase) {
                setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length); // Move to next phrase
            }
        };

        const typingTimer = setTimeout(handleTyping, speed);

        return () => clearTimeout(typingTimer); // Cleanup
    }, [text, isDeleting, speed, phrases, currentPhraseIndex]);

    // Function to highlight the last word
    const renderTextWithHighlight = () => {
        const words = text.split(' ');
        if (words.length > 1) {
            const lastWord = words.pop(); // Remove the last word from the array
            return ( <
                >
                { words.join(' ') }
                <span className="highlight">{lastWord}</span> <
                />
            );
        }
        return text;
    };

    return (
        <section className="hampper-hero-container">
      <article className="hampper-hero-text">
        <h1>{renderTextWithHighlight()}<span className="cursor">|</span></h1>
        <p className="tagline">Discover the best hampers tailored just for you.</p> {/* Add a tagline */}
      </article>
    </section>
    );
};

export default HampperHero;