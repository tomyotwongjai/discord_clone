import React from 'react';
import { images } from '../constants';
import { MenuIcon } from '@heroicons/react/outline';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';

const Header = () => {
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
        <a className='link'>Download</a>
        <a className='link'>Nitro</a>
        <a className='link'>Safety</a>
        <a className='link'>support</a>
        <a className='link'>Blog</a>
        <a className='link'>Career</a>
      </div>
      <div className='flex space-x-4'>
        <button
          className='bg-white m-2 p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:text-discord_purple  transition duration-200 ease-in-out lg:mr-96  whitespace-nowrap font-medium '
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          Open Discord
        </button>
        <MenuIcon className='h-9 m-2 text-white cursor-pointer lg:hidden' />
      </div>
    </nav>
  );
};

export default Header;
