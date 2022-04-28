import React from 'react';
import { useAuthState,useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  const [sendEmailVerification, sending, error] = useSendEmailVerification(
    auth
  );
  // console.log('req auth', user)
  if (loading) {
    return <Loading></Loading>
  }
  
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return <div>
      <h2>Email is not verifird</h2>
      <button
        onClick={async () => {
          await sendEmailVerification();
          alert('Sent email');
        }}
      >Send</button>
      

    </div>
  }
 
  
  return children;


};

export default RequireAuth;