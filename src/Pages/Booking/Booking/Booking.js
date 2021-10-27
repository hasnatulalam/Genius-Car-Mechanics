import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const[service,setService] =useState({})
    useEffect(()=>{
        fetch(`https://infinite-refuge-15612.herokuapp.com/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h2>details of:{service.name}</h2>

            <h2>this is booking: {serviceId}</h2>
        </div>
    );
};

export default Booking;