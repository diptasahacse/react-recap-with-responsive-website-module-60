import React, { useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import CustomTitle from '../Shared/CustomTitle/CustomTitle'


const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [isChecked, setIsChecked] = useState(false)
    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth)
    let errorMessage;
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (error) {
        errorMessage = <p className='text-danger'>{error?.message}</p>

    }

    const registerSubmitHandler = async(event) => {
        event.preventDefault()
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passwordRef.current.value;
        await createUserWithEmailAndPassword(email, pass)
        await updateProfile({ displayName:name });
          alert('Updated profile');


    }
    const checkboxChangeHandler = (event) => {
        setIsChecked(event.target.checked)


    }
    if (user) {
        navigate(from, { replace: true });
    }
    console.log(user)
   

    return (
        <Container className='my-4'>
            {/* Set Helmet */}
            <CustomTitle title="Register"></CustomTitle>
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
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={checkboxChangeHandler} name='checkbox' type="checkbox" className='d-inline me-2' />
                    <Form.Label className={`${isChecked ? "text-primary" : "text-danger"}`}>Accept <Link to='/terms'>terms and condition</Link> </Form.Label>
                </Form.Group>

                {
                    errorMessage && errorMessage
                }
                <Button disabled={!isChecked} className='form-control' variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <div className='text-center mt-3'>
                <p>Already have an account..? <Link to='/login'>Log in</Link> </p>
            </div>

            <Social></Social>
        </Container>
    );
};

export default Register;