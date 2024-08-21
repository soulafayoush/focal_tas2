import React from 'react';
import PropertyItem from '../PropertyItem/PropertyItem';
import './Properties.css';

const Properties = ({ featuredImage, featuredIcon, highlightTitle, highlightText, propertyItems }) => {
    return (
        <section className="properties HighlightSection">
            <div className="properties-container">
             
                <div className="properties-left image-wrapper">
                    <img src={featuredImage} alt="Featured Property" className="property-image main-image" />
                    <div className="icon-wrapper">
                        <img src={featuredIcon} alt="Featured Icon" className="featured-icon" />
                    </div>
                </div>

              
                <div className="text-container-middle">
            <span>Featured</span>
            <h3>Best Appartment & Sea View</h3>
            <div className="links-box">
                <h6>Best useful links ?</h6>
                <p>
                    Get <strong>the best villa</strong> website template in HTML CSS
                    and Bootstrap for your business. TemplateMo
                    provides you the <a href="#">best free CSS templates</a> in the
                    world. Please tell your friends about it.
                </p>
                <h5>How does this work ?</h5>
                <h5>Why is Villa Agency the best ?</h5>
            </div>
        </div>

           
                <div className="properties-right">
                    {propertyItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <PropertyItem
                                imageSrc={item.imageSrc}
                                title={item.title}
                                description={item.description}
                            />
                            {index < propertyItems.length - 1 && <div className="separator"></div>}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Properties;
