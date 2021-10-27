import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services,setServices]=useState([])
    
    useEffect(()=>{
        fetch('https://infinite-refuge-15612.herokuapp.com/services')
    .then(res=>res.json())
    .then(data=>setServices(data))
    },[])
    const handleDelete=id=>{
        const url=`https://infinite-refuge-15612.herokuapp.com/services/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
    }
    return (
        <div>
           <h2>Manage Services</h2> 
           {
               services.map(service=><div key={service._id}>
                  <h3>{service.name}</h3>
                  <button onClick={()=>handleDelete(service._id)}>delete</button>
               </div>)
           }
        </div>
    );
};

export default ManageServices;