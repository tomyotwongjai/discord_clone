import React from 'react';
import { HashtagIcon } from '@heroicons/react/outline';

const ChannelComponent = ({ id, channelName }) => {
  return (
    <div className='font-medium flex items-center cursor-pointer hover:bg-[#3a3c43] p-1 rounded-md'>
      <HashtagIcon className='h-5 mr-2' /> {channelName}
    </div>
  );
};

export default ChannelComponent;
