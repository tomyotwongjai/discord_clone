import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import { useEffect } from 'react';

const useAuth = () => {
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);
  return { user, loading };

  // return { user, loading, error };
};

function PrivateRoute() {
  const user = useAuth();

  return user ? <Outlet /> : <Navigate to='/' />;
}

export default PrivateRoute;
