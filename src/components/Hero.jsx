import React from 'react';
import { DownloadIcon } from '@heroicons/react/outline';
import images from '../constants/images';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    // main hero section
    <>
      <div className='  md:pb-0  flex items-center justify-center'>
        <div className='p-7 py-9 h-screen md:h-83vh md:flex relative'>
          <div className='flex text-white  flex-col gap-7 md:max-w-md lg:max-w-none '>
            <h1 className='font-extrabold text-7xl uppercase lg:text-center'>
              This is Just a Clone...
            </h1>
            <h2 className='text-lg font-light tracking-wide lg:max-w-3xl lg:text-center w-full'>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </h2>
            <div className='flex flex-col justify-start items-start sm:flex-row md:flex-col lg:flex-row lg:items-center lg:justify-center sm:item-center md:item-start gap-6'>
              <button className='bg-white text-black w-70 font-medium flex items-start rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out'>
                <DownloadIcon className='w-6 mr-2' />
                Download for Window
              </button>
              <button className='bg-gray-900 text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out'>
                Open Discord in your browser
              </button>
            </div>
          </div>
          <div className=' flex-grow '>
            <img
              src={images.hero_img_2}
              className='md:hidden mr-80 md:my-20 lg:right-1/2 absolute lg:block '
            />
            <img
              src={images.hero_img_1}
              alt='image'
              className='hidden lg:-right-1/2 md:inline absolute md:my-20 '
            />
          </div>
        </div>
      </div>

      {/* // mid hero section */}

      <div className=' pb-8 md:pb-0 bg-white flex items-center justify-center '>
        <div className='p-7 py-9 h-screen md:h-83vh md:flex  '>
          <img
            src={images.hero_mid}
            alt='image'
            className=' md:my-20  lg:block lg:w-[500px] '
          />
        </div>
        <div className='flex text-black  flex-col gap-7 md:max-w-md  '>
          <h1 className='font-bold text-4xl uppercase lg:text-center'>
            Create an invite-only place where you belong
          </h1>
          <h2 className='text-md font-light tracking-wide lg:max-w-3xl lg:text-center w-full'>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </h2>
        </div>
      </div>
      <div className=' pb-8 md:pb-0 bg-[#f6f6f6] flex items-center justify-center '>
        <div className='flex text-black  flex-col gap-7 md:max-w-md  '>
          <h1 className='font-bold text-4xl uppercase lg:text-center'>
            Where hanging out is easy
          </h1>
          <h2 className='text-md font-light tracking-wide lg:max-w-3xl lg:text-center w-full'>
            Grab a seat in a voice channel when you’re free. Friends in your
            server can see you’re around and instantly pop in to talk without
            having to call.
          </h2>
        </div>
        <div className='p-7 py-9 h-screen md:h-83vh md:flex  '>
          <img
            src={images.hero_mid_2}
            alt='image'
            className=' md:my-20  lg:block lg:w-[500px] '
          />
        </div>
      </div>

      {/* // mid 2 */}

      <div className=' pb-8 md:pb-0 bg-white flex items-center justify-center '>
        <div className='p-7 py-9 h-screen md:h-83vh md:flex  '>
          <img
            src={images.hero_mid_3}
            alt='image'
            className=' md:my-20  lg:block lg:w-[500px] '
          />
        </div>
        <div className='flex text-black  flex-col gap-7 md:max-w-md  '>
          <h1 className='font-bold text-4xl uppercase lg:text-center'>
            From few to a fandom
          </h1>
          <h2 className='text-md font-light tracking-wide lg:max-w-3xl lg:text-center w-full'>
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </h2>
        </div>
      </div>
      <div className=' md:pb-0 bg-[#f6f6f6] flex items-center justify-center '>
        <div className='p-7 py-9   '>
          <h1 className='font-bold text-4xl uppercase lg:text-center'>
            RELIABLE TECH FOR STAYING CLOSE
          </h1>
          <h2 className='text-md font-light tracking-wide lg:max-w-3xl lg:text-center w-full'>
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </h2>
          <img
            src={images.hero_mid_4}
            alt='image'
            className=' md:my-20  lg:block lg:w-[500px] '
          />
          <h1 className='font-bold text-4xl uppercase lg:text-center'>
            Ready to start the journey?
          </h1>
          <div className='flex flex-col justify-start items-start sm:flex-row md:flex-col my-10 lg:flex-row lg:items-center lg:justify-center sm:item-center  '>
            <button className='bg-discord_purple text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out'>
              Download for Window
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=' pb-8 md:pb-0 bg-black flex items-center justify-center '>
        <div className='p-7 py-9  md:flex'>
          <div className='flex text-discord_purple  flex-col gap-7 md:max-w-md lg:max-w-none '>
            <h1 className='font-extrabold text-4xl uppercase lg:ml-5'>
              Imaggin a place
            </h1>
          </div>

          <div className='flex flex-col justify-start items-start sm:flex-row md:flex-col lg:flex-row lg:items-center lg:justify-center sm:item-center md:item-start gap-6'>
            <button
              className='bg-discord_purple text-white m-2 p-2 rounded-full text-xs md:text-sm px-4 focus:outline-none hover:shadow-2xl hover:bg-discord_blurple  transition duration-200 ease-in-out lg:mr-96 ml-40  whitespace-nowrap font-medium '
              onClick={() => navigate('/register')}
            >
              sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
