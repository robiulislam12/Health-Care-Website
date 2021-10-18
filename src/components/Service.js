import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function Service({service}) {

    const {_id} = service;

    const history = useHistory();

    const handleDynamic = () =>{
        history.push(`/service/${_id}`)
    }

    return (
        <div style={{backgroundColor: `${service.bgColor}`}} className='rounded p-4 hover:bg-pink-300 cursor-pointer'>
            <img className='w-20' src={service.serviceIcon} alt={service.serviceName} />
            <h3 className='py-2'>{service.serviceName}</h3>
            <p>{service.shortDescription}</p>
            <Button onClick={handleDynamic}>See more</Button>
        </div>
    )
}
