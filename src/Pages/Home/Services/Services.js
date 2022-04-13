import React, { useEffect, useState } from 'react';

const Services = () => {
    const [allServiceData, setAllServiceData] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setAllServiceData(data))
    },[])


    return (
        <div>
            <h2>Services</h2>
            
        </div>
    );
};

export default Services;