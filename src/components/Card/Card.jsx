import React from 'react';
import CardList from '../CardList/CardList';
import './Card.css'; 

const cardData = [
    {
        id: 1,
        img: './images/property-01.jpg',
        type: 'Luxury Villa',
        price: '$2,264,000',
        location: '18 New Street Miami, OR 97219',
        bathrooms: '8',
        bedrooms: '8',
        area: '545m2',
        floor: '3',
        parking: '6 spots'
    },
    {
        id: 2,
        img: './images/property-02.jpg',
        type: 'Luxury Villa',
        price: '$1,180,000',
        location: '54 Mid Street Florida, OR 27001',
        bathrooms: '5',
        bedrooms: '6',
        area: '450m2',
        floor: '3',
        parking: '8 spots'
    },
    {
        id: 3,
        img: './images/property-03.jpg',
        type: 'Luxury Villa',
        price: '$1,460,000',
        location: '26 Old Street Miami, OR 38540',
        bathrooms: '5',
        bedrooms: '4',
        area: '225m2',
        floor: '3',
        parking: '10 spots'
    },
    {
        id: 4,
        img: './images/property-04.jpg',
        type: 'Apartment',
        price: '$584,500',
        location: '12 New Street Miami, OR 12650',
        bathrooms: '3',
        bedrooms: '4',
        area: '125m2',
        floor: '25th',
        parking: '2 cars'
    },
    {
        id: 5,
        img: './images/property-05.jpg',
        type: 'Penthouse',
        price: '$925,600',
        location: '34 Beach Street Miami, OR 42680',
        bathrooms: '4',
        bedrooms: '4',
        area: '180m2',
        floor: '38th',
        parking: '2 cars'
    },
    {
        id: 6,
        img: './images/property-06.jpg',
        type: 'Modern Condo',
        price: '$450,000',
        location: '22 New Street Portland, OR 16540',
        bathrooms: '2',
        bedrooms: '3',
        area: '165m2',
        floor: '26th',
        parking: '3 cars'
    }
];

const CardContainer = () => {
    return (
        <>
            <div className="text-container">
                <span>Properties</span>
        
            </div>
            <CardList cardData={cardData} />
        </>
    );
}

export default CardContainer;
