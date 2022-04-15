import React from 'react';
import { Row } from 'react-bootstrap';
import Expert1 from '../../../images/experts/expert-1.jpg'
import Expert2 from '../../../images/experts/expert-2.jpg'
import Expert3 from '../../../images/experts/expert-3.jpg'
import Expert4 from '../../../images/experts/expert-4.jpg'
import Expert5 from '../../../images/experts/expert-5.jpg'
import Expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const Experts = () => {

    const allExperts = [
        {
            id: 1,
            name: "Expert 1",
            images: Expert1
        },
        {
            id: 2,
            name: "Expert 2",
            images: Expert2
        },
        {
            id: 3,
            name: "Expert 3",
            images: Expert3
        },
        {
            id: 4,
            name: "Expert 4",
            images: Expert4
        },
        {
            id: 5,
            name: "Expert 5",
            images: Expert5
        },
        {
            id: 6,
            name: "Expert 6",
            images: Expert6
        },
    ]
    return (
        <div>
            <h2 className='service-title'>Our Experts</h2>



            <Row xs={1} md={4} className="g-4">
                {
                    allExperts.map(expert => <Expert key={expert.id} expert={expert}></Expert>)
                }

            </Row>

        </div>
    );
};

export default Experts;