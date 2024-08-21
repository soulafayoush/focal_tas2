import React from 'react';
import './Deal.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function Deal() {
  return (
    <div className="Deal" id="Deal">
      <div className="header">
        <div className="text-container">
          <h3>Find Your Best Deal Right Now!</h3>
        </div>
        <div className="btns-container">
          <button className="active4">Apartment</button>
          <button>Villa House</button>
          <button>Penthouse</button>
        </div>
      </div>

      <div className="body-container">
        <div className="box-container">
          <div className="boxes">
            <div className="box">
              <h6>185 m2</h6>
              <p>Total Flat Space</p>
            </div>
            <div className="box">
              <h6>26th</h6>
              <p>Floor number</p>
            </div>
            <div className="box">
              <h6>4</h6>
              <p>Number of rooms</p>
            </div>
            <div className="box">
              <h6>Yes</h6>
              <p>Parking Available</p>
            </div>
            <div className="box">
              <h6>Bank</h6>
              <p>Payment Process</p>
            </div>
          </div>
        </div>

        <div className="content-container">
          <div className="image-container">
            <img src="./images/property-05.jpg" alt="property" />
          </div>

          <div className="info-container">
            <h6>Extra Info About Property</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quised ipsum suspendisse.</p>
            <p>When you need free CSS templates, you can simply type TemplateMo in any search engine. Additionally, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.</p>
            <a href="#" className="schedule deal">
              <div className="icon-schedule">
                <FontAwesomeIcon icon={faCalendar} />
              </div>
              Schedule a visit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
