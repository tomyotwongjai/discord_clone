import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuth } from '../contexts/AuthContext';

const Channel = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();

    navigate('/');
  };

  return (
    <div onClick={handleLogout} className='text-red-500'>
      Logout
    </div>
  );
};

export default Channel;
