import React from 'react';
import { Container } from 'react-bootstrap';
import useService from '../../hooks/useServices';
import ManageServiceCard from './ManageServiceCard/ManageServiceCard';

const ManageService = () => {
    const [allServiceData, setAllServiceData] = useService();
    const handleDelete = (id) => {
        const status = window.confirm('Are you sure want to delete..?');
        if (status) {
            fetch(`http://localhost:7000/services/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data?.deletedCount > 0) {
                        const rest = allServiceData.filter(service => service._id !== id)
                        // console.log(rest)

                        setAllServiceData(rest)

                    }
                })
        }


    };
   

    return (
        <Container>
            <div>
                <h3>Manage Service</h3>

                <div>
                    {
                        allServiceData.map(service => <ManageServiceCard handleDelete={handleDelete} key={service._id} service={service}></ManageServiceCard>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default ManageService;