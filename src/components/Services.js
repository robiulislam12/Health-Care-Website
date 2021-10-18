import React, { useEffect, useState } from 'react';
import Service from './Service';

export default function Services() {

    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./data.json').then(res=>res.json()).then(data => setServices(data))
    },[])

    return (
        <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
            {
                services.map(service => <Service service={service} key={service.index}/>)
            }
        </div>
    )
}
