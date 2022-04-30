import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useService from '../../../hooks/useServices';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [allServiceData] = useService();


    return (

        <Container id='services'>

            <h2 className='text-center text-primary my-3'>Our Services</h2>


            <Row xs={1} md={4} className="g-4 m-0">
                {
                    allServiceData.map(service => <Service key={service._id} service={service}></Service>)
                }

            </Row>

        </Container>

    );
};

export default Services;