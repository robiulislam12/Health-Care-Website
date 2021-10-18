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
        <div style={{backgroundColor: `${service.bgColor}`}} className='rounded p-4 hover:bg-pink-300 cursor-pointer md:text-center lg:text-left'>
            <img className='w-30' src={service.serviceIcon} alt={service.serviceName} />
            <h3 className='py-2 lg:text-3xl md:text-2xl'>{service.serviceName}</h3>
            <p>{service.shortDescription}</p>
            <Button className='mt-2'onClick={handleDynamic}>See more</Button>
        </div>
    )
}
