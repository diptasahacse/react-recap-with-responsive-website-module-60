import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const { name, images } = expert;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={images} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Expert;