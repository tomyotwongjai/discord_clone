import { images } from '../constants';
// import LoginForm from '../components/LoginForm';

// const Login = () => {
//   return (
//     <main className='bg-discord_purple'>
//       <img src={images.hero_img_3} alt='bg-image' className='no-repeat' />
//       <div className='flex flex-col h-screen'>
//         <LoginForm />
//       </div>
//     </main>
//   );
// };

import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, provider } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signInWithPopup } from 'firebase/auth';
import { motion } from 'framer-motion';

const Login = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then(() => navigate('/channels'))
      .catch((error) => alert(error.message));
  };
  return (
    <main className=' bg-discord_blue h-screen flex flex-col item-center justify-center'>
      <div className='flex items-center justify-center bg-login_image '>
        <div className='px-8 py-6 xl:w-1/3 md:w-1/2 mt-4 text-left bg-[#36393f] shadow-lg rounded-md'>
          <h3 className='font-bold text-2xl  text-center text-white'>
            Welcom back!
          </h3>
          <p className='text-center text-m text-[#b9bbbe]'>
            We're so excited to see you again!
          </p>
          <form>
            <div>
              <div className='mt-4'>
                <label className='block uppercase text-[#b9bbbe] text-sm font-bold mb-2'>
                  Email
                </label>
                <input
                  type='text'
                  className='w-full h-10 px-4 py-2 mt-2  hover:border-slate-800 rounded-sm   focus:outline-none focus:border-sky-500 text-white focus:ring-1 bg-[#202225] transition-all duration-700 ease-in-out'
                />
              </div>
              <div class='mt-4'>
                <label className='block uppercase text-[#b9bbbe]'>
                  Password
                </label>
                <input
                  type='password'
                  class='w-full  text-white px-4 py-2 mt-2 rounded-sm focus:outline-none focus:ring-1 hover:border-slate-800 focus:border-sky-500  disabled:bg-slate-500 transition-all duration-700 bg-[#202225]  ease-in-out'
                />
              </div>
              <a href='#' class='text-sm text-blue-600 hover:underline'>
                Forgot password?
              </a>
              <div className='flex items-baseline justify-between'>
                <button className='px-6 py-2 mt-4 text-white bg-discord_purple w-full rounded-sm hover:bg-discord_blurple'>
                  Login
                </button>
              </div>
              <button
                className='px-6 py-2 mt-4 text-white bg-discord_purple w-full rounded-sm hover:bg-discord_blurple'
                onClick={!user ? signIn : () => navigate('/channels')}
              >
                signin With google
              </button>
              <p className='text-m text-[#b9bbbe]'>
                Need an account?
                <a href='#' class='text-sm text-blue-600 hover:underline'>
                  <span> Register</span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
