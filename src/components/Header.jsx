import React from 'react';
import { images } from '../constants';
import { MenuIcon } from '@heroicons/react/outline';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const sendToLogin = () => {
    if (!user) {
      navigate('/login');
    }
  };

  return (
    <nav className=' flex items-center justify-between py-4 px-6  '>
      <a href='/'>
        <img
          src={images.header_logo}
          alt='discord_img'
          className='w-32 h-12 object-contain lg:ml-96'
        />
      </a>
      <div className='hidden lg:flex space-x-6 text-white'>
        <a href='/' className='link'>
          Download
        </a>
        <a href='/' className='link'>
          Nitro
        </a>
        <a href='/' className='link'>
          Safety
        </a>
        <a href='/' className='link'>
          support
        </a>
        <a href='/' className='link'>
          Blog
        </a>
        <a href='/' className='link'>
          Career
        </a>
      </div>
      <div className='flex space-x-4'>
        <button
          className='bg-white m-2 p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_purple  transition duration-200 ease-in-out lg:mr-96  whitespace-nowrap font-medium '
          onClick={!user ? sendToLogin : () => navigate('/channels')}
        >
          {user ? 'Open Discord' : 'Login'}
        </button>
        <MenuIcon className='h-9 m-2 text-white cursor-pointer lg:hidden' />
      </div>
    </nav>
  );
}

export default Header;
