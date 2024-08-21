import React from 'react';
import PropTypes from 'prop-types';
import './CardItem.css';

const CardItem = ({ img, type, price, location, bathrooms, bedrooms, area, floor, parking }) => {
    return (
        <div className="card-item">
            <img src={img} alt={type} className="card-image" />
            <div className="card-details">
                <h4>{type}</h4>
                <p>{price}</p>
                <p>{location}</p>
                <ul>
                    <li><strong>Bathrooms:</strong> {bathrooms}</li>
                    <li><strong>Bedrooms:</strong> {bedrooms}</li>
                    <li><strong>Area:</strong> {area}</li>
                    <li><strong>Floor:</strong> {floor}</li>
                    <li><strong>Parking:</strong> {parking}</li>
                </ul>
            </div>
        </div>
    );
}

CardItem.propTypes = {
    img: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    bathrooms: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    floor: PropTypes.string.isRequired,
    parking: PropTypes.string.isRequired,
};

export default CardItem;
