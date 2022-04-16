import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
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

        <Container id='services'>

            <h2 className='text-center text-primary my-3'>Our Services</h2>


            <Row xs={1} md={4} className="g-4 m-0">
                {
                    allServiceData.map(service => <Service key={service.id} service={service}></Service>)
                }

            </Row>

        </Container>

    );
};

export default Services;