import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageServiceCard = ({ service,handleDelete }) => {
    const { name, _id } = service;
    const navigate = useNavigate()
    const handleUpdate = (id) =>{
        navigate(`/manageservice/${id}`)

    }
    
    
    
    return (
        <div className='d-flex justify-content-between border p-2 my-3'>
            <h3>{name}</h3>
            <div>
                <button  className='btn btn-info m-1' onClick={()=>handleUpdate(_id)} >Edit</button>
                <button className='btn btn-danger m-1' onClick={()=>handleDelete(_id)}>Delete</button>
            </div>
            

        </div>
    );
};

export default ManageServiceCard;