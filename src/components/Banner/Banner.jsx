import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="overlay">
                <div className="text-content">
                    <h1>Discover Your Dream Home</h1>
                    <p>Find the best properties in the city</p>
                </div>
            </div>
            <div className="bottom-image-container">
                <img src="/images/overlay-image.png" alt="Overlay" className="bottom-image" />
                <div className="overlay-text">
                    <h2>Luxury Apartments</h2>
                    <p>Starting at $500,000</p>
                </div>
            </div>
            <div className="stats-container">
                <div className="stat-box">
                    <h3>500+</h3>
                    <p>Properties Sold</p>
                </div>
                <div className="stat-box">
                    <h3>120+</h3>
                    <p>Luxury Listings</p>
                </div>
                <div className="stat-box">
                    <h3>30+</h3>
                    <p>Years of Experience</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
