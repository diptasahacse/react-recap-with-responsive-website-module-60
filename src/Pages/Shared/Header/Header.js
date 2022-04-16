import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg" sticky='top'>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt=""
                    className="d-inline-block align-top"
                    height='45' 
                    
                    
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link href='home#services'>Services</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;