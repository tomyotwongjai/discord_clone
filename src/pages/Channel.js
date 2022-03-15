// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase';

// const Channel = () => {
//   const navigate = useNavigate();
//   const { user } = useAuthState(auth);

//   const handleLogout = async () => {
//     await auth.signOut();

//     navigate('/');
//   };

//   useEffect(() => {
//     if (user) {
//       navigate('/');

//       return;
//     }
//   }, [user, navigate]);

//   return (
//     <div onClick={handleLogout} className='text-red-500'>
//       Logout
//     </div>
//   );
// };

// export default Channel;

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Channel() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut();

    navigate('/');
  };

  useEffect(() => {
    if (!user) {
      navigate('/');

      return;
    }
  }, [user, navigate]);

  return (
    <>
      {!user && <Navigate to='/' />}
      <div onClick={handleLogout} className='text-red-500'>
        Logout
      </div>
    </>
  );
}

export default Channel;
