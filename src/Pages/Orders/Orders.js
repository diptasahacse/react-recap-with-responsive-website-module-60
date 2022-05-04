import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import OrderCard from './OrderCard/OrderCard';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [allOrders, setAllOrders] = useState([])
    const email = user.email;
    useEffect(() => {
        fetch(`http://localhost:7000/orders?email=${email}`)
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [])
    return (
        <Container>
            <h3>All Orders</h3>

            <div className='my-4'>
                {
                    allOrders.map(order => <OrderCard key={order._id} order={order}></OrderCard>)
                }
            </div>
        </Container>
    );
};

export default Orders;