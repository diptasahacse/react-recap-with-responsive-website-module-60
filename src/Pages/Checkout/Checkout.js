import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useService from '../../hooks/useService';

const Checkout = () => {
    const { serviceId } = useParams()
    const [service, setService] = useService(serviceId);

    const [user, setUser] = useState({
        name: "Dipt Saha",
        email: "diptasaha.lpu.cse@gmail.com",
        address: "Dumuria Khulna"
    })
    const handleNameChange = event => {
        const updateName = event.target.value;

        const { name, ...rest } = user;

        const newUser = { name: updateName, ...rest };
        setUser(newUser)



    }







    return (
        <Container>
            <div>
                <h3>CheckOut</h3>
                <p>Service Name: {service?.name}</p>
                <p>Price: {service?.price}</p>



            </div>
            <div>
                <form>
                    <input onChange={handleNameChange} type="text" name="name" value={user.name} />
                    <br />
                    <input type="email" name="email" value={user.email} />
                    <br />
                    <input type="address" name="address" value={user.address} />
                    <br />
                    <input type="text" value={service?.name} />
                    <br />
                    <input type="submit" value="Place Order" />
                </form>
            </div>
        </Container>
    );
};

export default Checkout;