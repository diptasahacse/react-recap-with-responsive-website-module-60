import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://fast-savannah-23296.herokuapp.com/services',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(result=> console.log(result))


    };
    return (
        <Container>
            <h3>Add Service</h3>
            <div className='w-75 mx-auto my-3'>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='m-1' placeholder='Enter Service Name' {...register("name", { required: true })} />
                    <textarea className='m-1' placeholder='Description' {...register("description", { required: true })} />
                    <input className='m-1' placeholder='Price' type="number" {...register("price", { required: true })} />
                    <input className='m-1' placeholder='Enter Image URL' {...register("img", { required: true })} />
                    <input type="submit" value='Add' />
                </form>
            </div>
        </Container>
    );
};

export default AddService;