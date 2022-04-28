import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:7000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const navigate = useNavigate()
    const checkOutHandler = () => {
        navigate('/checkout')

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