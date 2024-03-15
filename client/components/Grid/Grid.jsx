import React from "react";
import './Grid.css';

import ship from './ship.jpg';
import food from './food.jpg';
import crew from './crew.jpg';
import courier from './courier.jpg';
import travel from './travel.jpg';
import LSA from './LSA.jpg';

const Grid = () => {
    return (
        <div className="grid">
        <div className="grid-item">
            {/* <a href="/services#sizing"> */}
            <img src={ship} alt="ship" className="grid-photo" />
            {/* </a> */}
            <p>Ship Chandler Service</p>
        </div>
        <div className="grid-item">
        <a href="https://kchandler.net/" target="_blank">
            <img src={food} alt="food" className="grid-photo" />
            </a>
            <p>Food Catering Delivery Service (K Chandler)</p>
        </div>
        <div className="grid-item">
            <img src={crew} alt="crew" className="grid-photo" />
            <p>Crew Transfers</p>
        </div>
        <div className="grid-item">
            <img src={courier} alt="courier" className="grid-photo" />
            <p>Courier Service</p>
        </div>
        <div className="grid-item">
            <img src={travel} alt="travel" className="grid-photo" />
            <p>Crew Travel Agent Service</p>
        </div>
        <div className="grid-item">
            <img src={LSA} alt="LSA" className="grid-photo" />
            <p>LSA Stock and Servicing</p>
        </div>
        </div>
    );
    }


export default Grid;