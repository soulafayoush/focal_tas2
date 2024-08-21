import React from 'react';
import './PropertyItem.css';

const PropertyItem = ({ imageSrc, title, description }) => {
    return (
        <div className="image-item">
            <img src={imageSrc} alt={title} className="info-image" />
            <div className="info-text">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default PropertyItem;
