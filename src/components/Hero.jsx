import React from 'react';
import { DownloadIcon } from '@heroicons/react/outline';
import images from '../constants/images';

const Hero = () => {
  return (
    <div className=' pb-8 md:pb-0 lg:flex lg:justify-center lg:items-center relative overflow-hidden my-10'>
      <div className='p-7 py-9 h-screen md:h-83vh md:flex relative'>
        <div className='flex text-white  flex-col gap-7 md:max-w-md lg:max-w-none '>
          <h1 className='font-extrabold text-7xl uppercase lg:text-center'>
            imagine a place...
          </h1>
          <h2 className='text-lg font-light tracking-wide lg:max-w-3xl lg:text-center w-full'>
            ...where you can belong to a school club, a gaming group, or a
            worldwide art community. Where just you and a handful of friends can
            spend time together. A place that makes it easy to talk every day
            and hang out more often.
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
        <div className=' flex-grow'>
          <img
            src={images.hero_img_2}
            className='md:hidden mr-80 md:my-20 lg:right-1/2 absolute lg:block '
          />
          <img
            src={images.hero_img_1}
            alt='image'
            className='hidden md:inline absolute md:my-20 '
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
