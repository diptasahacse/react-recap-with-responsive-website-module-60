import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [allServiceData, setAllServiceData] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setAllServiceData(data))
    },[])


    return (
        <div>
            <h2 className='service-title'>Our Services</h2>

            <div className='service-container'>
                {
                    allServiceData.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            
        </div>
    );
};

export default Services;