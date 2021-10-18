import React from 'react'
import Blog from './Blog'

const img1 = 'https://donto-react.netlify.app/static/media/blog1.22d18b54.jpg';
const img2 = 'https://donto-react.netlify.app/static/media/blog2.d0a43bd1.jpg';
const img3 = 'https://donto-react.netlify.app/static/media/blog3.4104f17c.jpg';

export default function Blogs() {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-4'>
            <Blog img={img1} title='Maximize Your 2019 Dental Insurance with lots of Benefits'/>
            <Blog img={img2} title='Are Your Teeth Making You Old? Are You Surprised!'/>
            <Blog img={img3} title='Dental Implants: The Next Best Thing to Get Natural Teeth'/>
        </div>
    )
}
