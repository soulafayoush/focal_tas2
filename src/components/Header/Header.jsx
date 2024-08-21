import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="company-info">
                <p><i className="fa-regular fa-envelope"></i> infocompony.com<br /></p>
                <p><i className="fa-regular fa-envelope"></i> infocompony.com<br /></p>
            </div>
            <div className="social-icons">
                <a href="tel:+1234567890" aria-label="Call Us" className="icon-phone">
                <i className="fa-solid fa-phone"></i>
                </a>
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="icon-facebook">
                <i className="fa-brands fa-facebook"></i>
                </a>
            </div>
        </header>
    );
};

export default Header;
