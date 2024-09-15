import React, { useState, useEffect } from "react";
import mrstan from '../../assets/Images/Nectar-Buzz/mr stanely.jpg';
import mamaruka from '../../assets/Images/Nectar-Buzz/mamaruka.jpg';

const UserReviews = () => {
    const reviews = [{
            image: mrstan,
            text: "I love the variety of flavors Nectar Buzz offers. From classic honey to flavored options like manuka and raw honey, there's something for everyone.",
            name: "Pa Stanley",
        },
        {
            image: mamaruka,
            text: "Nectar Buzz is my go-to for high-quality honey. Their commitment to sustainability makes me feel good about every purchase.",
            name: "Iya Deji",
        },
        {
            image: mrstan,
            text: "The taste is always consistent, and I trust their products to be pure and organic. Great experience overall!",
            name: "Pa J",
        },
    ];

    const [currentReview, setCurrentReview] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReview((prevReview) =>
                prevReview === reviews.length - 1 ? 0 : prevReview + 1
            );
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [reviews.length]);
    return (
        <div style={styles.container}>
      <h2 style={styles.heading}>TOP STORIES FROM OUR CONSUMERS</h2>
      <div style={styles.imageContainer}>
        <img
          src={reviews[currentReview].image}
          alt={reviews[currentReview].name}
          style={styles.image}
        />
      </div>
      <blockquote style={styles.quote}>
        "{reviews[currentReview].text}"
      </blockquote>
      <p style={styles.name}>- {reviews[currentReview].name}</p>
    </div>
    );
};

const styles = {
    container: {
        textAlign: "center",
        padding: "40px 20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        width: '100%',
        // maxWidth: "800px",
        height: 'maxContent',
        margin: "0 auto",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        marginBottom: "30px",
        fontFamily: "'Georgia', serif",
        color: "#333",
    },
    imageContainer: {
        margin: "20px 0",
    },
    image: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        objectFit: "cover",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    quote: {
        fontStyle: "italic",
        fontSize: "1.1rem",
        color: "#555",
        lineHeight: "1.5",
        maxWidth: "600px",
        margin: "20px auto",
    },
    name: {
        fontSize: "1.1rem",
        fontWeight: "bold",
        color: "#333",
        marginTop: "20px",
    },
};

export default UserReviews;