import React, { useEffect, useState } from 'react'
import SingleDoctor from '../SingleDoctor'

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);

    useEffect(()=>{
        fetch('/doctorData.json').then(res=>res.json()).then(data => setDoctors(data))
    }, [])


    return (
        <div className='container'>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 lg:py-10 ">
            {
                doctors.map(doctor => <SingleDoctor doctor={doctor} key={doctor.id}/>)
            }
            </div>
        </div>
    )
}
