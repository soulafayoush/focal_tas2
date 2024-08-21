import React from 'react';
import './NavBar.css';

const NavBar = () => {
    const toggleMenu = () => {
        const menu = document.getElementById('nav-menu');
        menu.classList.toggle('open');
    };

    return (
        <>
            <nav>
                <h1 className='logo'>VILLA</h1>
                <div className="items">
                    <ul>
                        <li>Home</li>
                        <li>Properties</li>
                        <li>Property Details</li>
                        <li>Contact us</li>
                    </ul>
                    <button className="custom-button">
                        <i className="fa-solid fa-calendar-days icon"></i> Schedule a visit
                    </button>
                </div>
                <button className='menu-btn' onClick={toggleMenu}>
                    <i className="fa-solid fa-bars"></i>
                </button>
            </nav>
            <div id="nav-menu" className="nav-menu">
                <ul>
                    <li>Home</li>
                    <li>Properties</li>
                    <li>Property Details</li>
                    <li>Contact us</li>
                </ul>
                <button className="custom-button">
                    <i className="fa-solid fa-calendar-days icon"></i> Schedule a visit
                </button>
            </div>
        </>
    );
};

export default NavBar;
