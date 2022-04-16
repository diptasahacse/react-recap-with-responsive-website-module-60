import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className='py-4 bg-primary border-top border-3 border-danger'>
            <Container>
                <div className='text-center'>
                    <p className='fs-5 m-0 text-white'>Copyright &copy; {new Date().getFullYear()} By Dipta Saha</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;