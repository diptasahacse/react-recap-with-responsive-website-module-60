import React from 'react';
import { Col } from 'react-bootstrap';

const OrderCard = ({ order }) => {
    console.log(order)
    return (
        <div className='border p-1 m-1'>
            <h4>{order?.service}</h4>
            
        </div>
    );
};

export default OrderCard;