import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [allServiceData, setAllServiceData] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setAllServiceData(data))
    }, [])


    return (
        <div>
            <h2 className='service-title'>Our Services</h2>


            <Row xs={1} md={4} className="g-4 m-0">
            {
                    allServiceData.map(service => <Service key={service.id} service={service}></Service>)
                }

            </Row>

        </div>
    );
};

export default Services;