import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useService from '../../hooks/useService';

const Checkout = () => {
    const [user] = useAuthState(auth);
    const { serviceId } = useParams()
    const [service, setService] = useService(serviceId);

    // const [user, setUser] = useState({
    //     name: "Dipt Saha",
    //     email: "diptasaha.lpu.cse@gmail.com",
    //     address: "Dumuria Khulna"
    // })
    // const handleNameChange = event => {
    //     const updateName = event.target.value;

    //     const { name, ...rest } = user;

    //     const newUser = { name: updateName, ...rest };
    //     setUser(newUser)



    // }
    const formOnSubmitHandler = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: service?.name,
            serviceId: serviceId,
            address: event.target.address.value
        }
        axios.post('http://localhost:7000/orders', order)
        .then(res => {
            console.log(res)
        })
    }







    return (
        <Container>
            <div>
                <h3>CheckOut</h3>
                <p>Service Name: {service?.name}</p>
                <p>Price: {service?.price}</p>



            </div>
            <div className='w-75 mx-auto'>
                <form onSubmit={formOnSubmitHandler}>
                    <input className='form-control' type="text" name="name" value={user?.displayName} readOnly />
                    <br />
                    <input className='form-control' type="email" name="email" value={user?.email} readOnly />
                    <br />
                    <input className='form-control' type="address" name="address" placeholder='Enter Address' required />
                    <br />
                    <input className='form-control' type="text" name="service" value={service?.name} readOnly />
                    <br />
                    <input className='btn btn-primary' type="submit" value="Place Order" />
                </form>
            </div>
        </Container>
    );
};

export default Checkout;