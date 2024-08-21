import React from 'react';
import CardItem from '../CardItem/CardItem';
import './CardList.css';

const CardList = ({ cardData }) => {
    return (
        <div className="card-container">
            {cardData.map(card => (
                <CardItem key={card.id} {...card} />
            ))}
        </div>
    );
}

export default CardList;
