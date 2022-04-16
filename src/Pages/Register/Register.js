import React, { useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const registerSubmitHandler = (event) =>{
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passwordRef.current.value;

        console.log(name,email,pass)

    }
    return (
        <Container className='my-4'>
            <div className='text-center text-primary'>
                <h3>Please Register</h3>
            </div>

            <Form onSubmit={registerSubmitHandler} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter full name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef}  type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className='text-center'>
                <p>Already have an account..? <Link to='/login'>Log in</Link> </p>
            </div>
        </Container>
    );
};

export default Register;