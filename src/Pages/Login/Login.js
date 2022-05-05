import React, { useEffect, useRef } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Social from '../Social/Social';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Shared/Loading/Loading';
import axios from 'axios';
const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    let errorMessage;
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword, user1, loading, error
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, passReseterror] = useSendPasswordResetEmail(
        auth
      );

    const [user] = useAuthState(auth)

    if(sending || loading){
        return <Loading></Loading>
    }
    

    const loginSubmitHandler = async (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const pass = passwordRef.current.value;
        // console.log(email,pass)
        
        await signInWithEmailAndPassword(email, pass);

        const {data} = await axios.post('http://localhost:7000/login',{email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });



    }
    if (user) {
        // navigate(from, { replace: true });
    }
    if (error) {
        errorMessage = <p className='text-danger'>{error.message}</p>
    }
    const resetPassHandler = async() =>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
          toast('Sent email');


    }

    return (

        <Container className='my-4'>
            
            <div className='text-center text-primary'>
                <h3>Please Login</h3>
            </div>

            <Form onSubmit={loginSubmitHandler} className='w-50 mx-auto'>
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
                
                <div className='text-center'>
                    {
                        errorMessage && errorMessage
                    }
                </div>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <div className='text-center'>
                <p>New user..? <Link to='/register'>Register here</Link> </p>
            </div>
            <div className='text-center'>
                <button className='btn btn-link' onClick={resetPassHandler}>Forget Password..?</button>
            </div>
            <ToastContainer />
            <Social></Social>
        </Container>
    );
};

export default Login;