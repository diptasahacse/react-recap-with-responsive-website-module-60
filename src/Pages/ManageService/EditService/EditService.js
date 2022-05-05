import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useService from '../../../hooks/useService';
import { useForm } from "react-hook-form";
const EditService = () => {
    const { editServiceId } = useParams();
    const { register, handleSubmit } = useForm();
    const [service, setService] = useService(editServiceId)
    const onSubmit = data => {
        fetch(`https://fast-savannah-23296.herokuapp.com/services/${editServiceId}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result =>{
                console.log(data)

            })



    };
    return (
        <Container>
            <h4>Edit Service</h4>
            <div className="row">
                <div className="col-md-6 col-12">
                    <div>
                        <h4>Before</h4>
                        <p>Name: {service.name}</p>
                        <p>Description: {service.description}</p>
                        <p>Price: {service.price}</p>
                        <p>Image link: {service.img}</p>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div>
                        <h4>After</h4>
                        <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                            <input className='m-1' placeholder='Enter Service Name' {...register("name", { required: true })} />
                            <textarea className='m-1' placeholder='Description' {...register("description", { required: true })} />
                            <input className='m-1' placeholder='Price' type="number" {...register("price", { required: true })} />
                            <input className='m-1' placeholder='Enter Image URL' {...register("img", { required: true })} />
                            <input type="submit" value='Add' />
                        </form>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default EditService;