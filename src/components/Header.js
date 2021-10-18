import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link ,useHistory, useLocation} from 'react-router-dom';
import Logo from '../assets/whitelogo.png';
import useAuth from '../hooks/useAuth';

export default function Header() {
    //sign in with google Provider and user from useAuth() hook
    const {user, signInWithGoogle, logOut, setError} = useAuth()

    const location = useLocation()
    const history = useHistory()

    const redirect_uri = location.state?.from || '/';

    const redirectUser = () =>{
        signInWithGoogle()
        .then(result =>{
            history.push(redirect_uri)
        }).catch(error => setError(error.message))
    }

    return (
        <Navbar className='bg-green-400' expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img src={Logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto fw-bold">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                    {
                        user.email ? 
                        (
                            <>
                                <span className="mx-2">{user.displayName}</span>
                                <Button variant="danger" onClick={logOut}>Log Out</Button>
                            </>
                        )
                        : 
                            <Button variant="danger" onClick={redirectUser}>Login</Button>
                        
                    }
                    
                    </Navbar.Collapse>
                </Container>
                </Navbar>
    )
}
