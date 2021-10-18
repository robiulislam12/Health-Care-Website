import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
    return (
        <div className='bg-green-400 lg:py-10 md:py-5 sm:py-5 lg:mt-20'>
            <div className="container">
                <div className="grid lg:grid-cols-2">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="" />
                        </Link>
                    </div>
                    <div className='lg:col-end-7 md:col-end-6 sm:col-end-2 col-span-2'>
                        <ul>
                            <li className='text-1xl cursor-pointer'>Home</li>
                            <li className='text-1xl cursor-pointer'>About</li>
                            <li className='text-1xl cursor-pointer'>Doctors</li>
                            <li className='text-1xl cursor-pointer'>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
