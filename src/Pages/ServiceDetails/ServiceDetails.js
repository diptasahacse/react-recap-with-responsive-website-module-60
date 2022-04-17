import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams()
    const navigate = useNavigate()
    const checkOutHandler = () =>{
        navigate('/checkout')

    }
    return (
        <div>
            
            <button onClick={checkOutHandler} className='btn btn-primary'>CheckOut{serviceId}</button>
        </div>
    );
};

export default ServiceDetails;