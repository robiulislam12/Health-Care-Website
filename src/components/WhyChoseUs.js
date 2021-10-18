import React from 'react';


export default function WhyChoseUs({img, title, text}) {
    return (
        <div className='text-center bg-blue-50 p-5 rounded-md cursor-pointer hover:bg-blue-100 hover:shadow-xl'>
            <img  className='whc-img w-20' src={img} alt="title" />
            <h3 className='py-3'>{title}</h3>
            <p>{text}</p>
        </div>
    )
}
