import React from 'react';
import './Service.css'
const Service = ({ service }) => {

    const { name, price, description, img } = service;
    return (
        <div className='service-item'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <p>{description}</p>
            <button>Book: {name}</button>
            

        </div>
    );
};

export default Service;