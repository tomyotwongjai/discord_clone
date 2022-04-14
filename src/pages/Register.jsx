import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const Register = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmit, setIsSubmitting] = useState(false);

  const mounted = useRef(false);
  // prevent memory leak
  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
    };
  }, []);

  // handling the form submission

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    register(email, password, username)
      .then(() => {
        if (mounted.current) {
          setIsSubmitting(false);
          navigate('/login');
        }
      })
      .catch((error) => {
        if (mounted.current) {
          setIsSubmitting(false);
          alert(error.message);
        }
      })
      .finally(() => {
        if (mounted.current) {
          setIsSubmitting(false);
        }
      });
  };

  return (
    <main className=' bg-discord_blue h-screen flex flex-col item-center justify-center'>
      <div className='flex items-center justify-center bg-login_image relative '>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ delay: 0.2 }}
          className='px-8 py-6 xl:w-1/3 md:w-1/2 mt-4 text-left bg-[#36393f] shadow-lg rounded-md'
        >
          <h3 className='font-bold text-2xl  text-center text-white'>
            Create an account
          </h3>

          <form
            className='relative'
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email || !username || !password) {
                return alert('Please fill all the fields');
              }
            }}
          >
            <div className='mt-4'>
              <label className='block uppercase text-[#b9bbbe] text-sm font-bold mb-2'>
                Email
              </label>
              <input
                type='email'
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full h-10 px-4 py-2 mt-2  hover:border-slate-800 rounded-sm   focus:outline-none focus:border-sky-500 text-white focus:ring-1 bg-[#202225] transition-all duration-700 ease-in-out'
              />
            </div>
            <div className='mt-4'>
              <label className='block uppercase text-[#b9bbbe] text-sm font-bold mb-2'>
                username
              </label>
              <input
                type='text'
                required
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                className='w-full h-10 px-4 py-2 mt-2  hover:border-slate-800 rounded-sm   focus:outline-none focus:border-sky-500 text-white focus:ring-1 bg-[#202225] transition-all duration-700 ease-in-out'
              />
            </div>
            <div class='mt-4'>
              <label className='block uppercase text-[#b9bbbe]'>password</label>
              <input
                type='password'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                class='w-full  text-white px-4 py-2 mt-2 rounded-sm focus:outline-none focus:ring-1 hover:border-slate-800 focus:border-sky-500  disabled:bg-slate-500 transition-all duration-700 bg-[#202225]  ease-in-out'
              />
            </div>

            <div className='flex items-baseline justify-between'>
              <button
                className='px-6 py-2 mt-4 text-white bg-discord_purple w-full rounded-sm hover:bg-discord_blurple'
                isloading={isSubmit}
                onClick={handleSubmit}
              >
                Continue
              </button>
            </div>

            <a href='/login' class='text-sm text-blue-600 hover:underline'>
              <span>Already have an account?</span>
            </a>
          </form>
        </motion.div>
      </div>
    </main>
  );
};

export default Register;
