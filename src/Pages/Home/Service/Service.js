import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {

    const { id, name, price, description, img } = service;
    const navigate = useNavigate();

    const ServiceHandler = (id) =>{
        navigate(`service/${id}`);

    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} className="w-100" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <p>${price}</p>
                    <button className='btn btn-primary' onClick={()=>ServiceHandler(id)}>Book: {name}</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;