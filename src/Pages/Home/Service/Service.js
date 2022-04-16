import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css'
const Service = ({ service }) => {

    const { name, price, description, img } = service;
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
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;