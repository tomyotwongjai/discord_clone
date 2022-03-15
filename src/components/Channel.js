import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const Channel = () => {
  // react v6 use useNavigate instead of useHistory
  const navigate = useNavigate();
  const { user } = useAuthState(auth);
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();

    navigate('/');
  };

  useEffect(() => {
    if (user) {
      navigate('/');

      return;
    }
  }, [user, navigate]);

  return (
    <div onClick={handleLogout} className='text-red-500'>
      Logout
    </div>
  );
};

export default Channel;

// import React from 'react';

// const Channel = () => {
//   return <div>Hello</div>;
// };

// export default Channel;
