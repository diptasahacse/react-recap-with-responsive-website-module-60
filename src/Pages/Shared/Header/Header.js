import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png'

const Header = () => {
    return (
        <Navbar bg="primary" expand="lg">
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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;