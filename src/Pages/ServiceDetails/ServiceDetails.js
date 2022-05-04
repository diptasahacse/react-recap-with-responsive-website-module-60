import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useService from '../../hooks/useService';


const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [service, setService] = useService(serviceId)
    
    const navigate = useNavigate()
    const checkOutHandler = () => {
        navigate(`/checkout/${serviceId}`)

    }
    return (
        <div className='py-5'>
            <div className='w-50 mx-auto'>
                <h5>{service?.name}</h5>
                <p>$ {service?.price}</p>
                <p>{service?.description}</p>
                <img src={service?.img} alt="" />
                <div>
                    <button onClick={checkOutHandler} className='btn mt-4 btn-primary'>CheckOut</button>
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;