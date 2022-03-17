import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/');

      return;
    }
  }, [user, navigate]);

  return (
    <div className='bg-discord_blue'>
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
