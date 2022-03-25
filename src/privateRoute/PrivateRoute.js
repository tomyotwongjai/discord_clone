import { Navigate, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

const useAuth = () => {
  const [user] = useAuthState(auth);

  return user;
};

function PrivateRoute() {
  const user = useAuth();

  return user ? <Outlet /> : <Navigate to='/' />;
}

export default PrivateRoute;
