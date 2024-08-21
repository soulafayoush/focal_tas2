import React from 'react';
import './Hero.css';

class Hero extends React.Component {
    componentDidMount() {
        let currentIndex = 0;
        const images = document.querySelectorAll('.hero-slider img');
        const dots = document.querySelectorAll('.dot');
        const totalImages = images.length;

        const showSlide = (index) => {
            images[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
            currentIndex = (index + totalImages) % totalImages;
            images[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        };

        const nextSlide = () => {
            showSlide(currentIndex + 1);
        };

        const previousSlide = () => {
            showSlide(currentIndex - 1);
        };

        document.querySelector('.arrow-next').addEventListener('click', nextSlide);

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => showSlide(index));
        });

        const interval = setInterval(nextSlide, 5000); 

        this.cleanup = () => {
            clearInterval(interval);
            document.querySelector('.arrow-next').removeEventListener('click', nextSlide);
            dots.forEach((dot) => {
                dot.removeEventListener('click', () => showSlide(index));
            });
        };
    }

    componentWillUnmount() {
        this.cleanup();
    }

    render() {
        const { buttonText, buttonSpanText, headlineText, images } = this.props;

        return (
            <div className="hero">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <button className="hero-button">{buttonText} <span>{buttonSpanText}</span></button>
                        <h1 dangerouslySetInnerHTML={{ __html: headlineText }} />
                    </div>
                </div>
                <div className="hero-slider">
                    {images.map((image, index) => (
                        <img src={image} className={index === 0 ? 'active' : ''} alt={`Banner ${index + 1}`} key={index} />
                    ))}
                    <div className="arrow-container">
                        <span className="arrow arrow-next">&#10095;</span>
                    </div>
                    <div className="dots">
                        {images.map((_, index) => (
                            <span className={`dot ${index === 0 ? 'active' : ''}`} key={index}></span>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
