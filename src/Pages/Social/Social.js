import React from 'react';
import google from '../../images/social/google.png'
import facebook from '../../images/social/facebook.png'
import github from '../../images/social/github.png'
import { useSignInWithGoogle, useSignInWithGithub, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';


const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let errorMessage;

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if (user) {
        navigate(from, { replace: true });

    }
    if (error || error1) {
        errorMessage = <p className='text-danger'>{error?.message} {error1?.message}</p>

    }
    return (
        <div className='mt-4 border'>
            <div className='text-center'>
                {
                    errorMessage && errorMessage
                }
            </div>
            <div className='text-center m-3'>
                <button onClick={() => signInWithGoogle()} className='btn border'>
                    <img style={{ height: "30px", width: "30px" }} src={google} alt="" />
                    <span>Continue With Google</span>
                </button>
            </div>
            <div className='text-center m-3'>
                <button className='btn border'>
                    <img style={{ height: "30px", width: "30px" }} src={facebook} alt="" />
                    <span>Continue With Facebook</span>
                </button>
            </div>
            <div className='text-center m-3'>
                <button onClick={() => signInWithGithub()} className='btn border'>
                    <img style={{ height: "30px", width: "30px" }} src={github} alt="" />
                    <span>Continue With Github</span>
                </button>
            </div>

        </div>
    );
};

export default Social;