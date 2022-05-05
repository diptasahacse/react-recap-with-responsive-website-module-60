import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderCard from './OrderCard/OrderCard';

const Orders = () => {
    const [user] = useAuthState(auth);
    const [allOrders, setAllOrders] = useState([])
    const email = user.email;
    const navigate = useNavigate()
    useEffect(() => {
        const getOrders = async()=>{
            const url = `http://localhost:7000/orders?email=${email}`;
            try{
                const {data} = await axios.get(url,{
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setAllOrders(data)
            }
            catch(error){
                console.log(error)
                if(error.response.status === 403 || error.response.status=== 403){
                    signOut(auth)
                    navigate('/login')


                }

            }
        }
        getOrders()
    }, [])
    console.log(allOrders)
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