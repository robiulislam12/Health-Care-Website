import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

export default function Header() {
    //sign in with google Provider and user from useAuth() hook
    const {user, signInWithGoogle, logOut} = useAuth()


    return (
        <div className='container'>
            <div className='header'>
                <div>
                    <Link to="/home">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div>
                   {
                       user &&  <span>{user.displayName}</span>
                   }
                    <button onClick={signInWithGoogle} type='button'>Login</button>
                    <button onClick={logOut} type='button'>Log out</button>
                </div>
            </div>
        </div>
    )
}
