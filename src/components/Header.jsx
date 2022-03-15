import React from 'react';
import { images } from '../constants';
import { MenuIcon } from '@heroicons/react/outline';
import { auth, provider } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';

// import 'firebase/app';
// import { auth } from '../firebase';
// import firebase from 'firebase/compat/app';

function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then(() => navigate('/channel'))
      .catch((error) => alert(error.message));
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
          onClick={!user ? signIn : () => navigate('/channel')}
          // onClick={() =>
          //   auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          // }
        >
          {!user ? 'Login' : 'Open Discrod'}
        </button>
        <MenuIcon className='h-9 m-2 text-white cursor-pointer lg:hidden' />
      </div>
    </nav>
  );
}

export default Header;
