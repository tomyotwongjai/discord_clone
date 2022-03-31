import { ChevronDownIcon, PlusIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
import { MicrophoneIcon, PhoneIcon, CogIcon } from '@heroicons/react/solid';
import ServerIcon from '../container/ServerIcon';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import ChannelComponent from '../components/ChannelComponent';
import ChatComponent from '../components/ChatComponent';
import { collection, addDoc } from 'firebase/firestore';

function Channel() {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  // Using useCollection insead of firebase query/doc
  const [channels] = useCollection(collection(db, 'channels'));

  const handleLogout = async () => {
    await auth.signOut();

    navigate('/');
  };

  // create constant for adding channel using addDoc to add channels when channel prompt presented

  const handleAddChannel = async (e) => {
    e.preventDefault();
    const channelName = prompt('Add Channel');

    if (channelName) {
      try {
        await addDoc(collection(db, 'channels'), {
          channelName: channelName,
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <>
      <div className='flex h-screen'>
        {/* chat small side bar section */}

        <div className='flex flex-col  space-y-3 bg-[#202225] p-3 min-w-max'>
          <div className='server-default hover:bg-discord_purple'>
            <a href='/'>
              <img src='https://rb.gy/kuaslg' alt='' className='h-5' />
            </a>
          </div>
          <hr className='border-gray-500 mx-2 border w-8 max-auto' />
          <ServerIcon image='https://rb.gy/qidcpp' />
          <ServerIcon image='https://rb.gy/zxo0lz' />
          <ServerIcon image='https://rb.gy/qidcpp' />
          <ServerIcon image='https://rb.gy/zxo0lz' />
          <div className='server-default hover:bg-discord_green group'>
            <PlusIcon className='text-discord_green h-7 group-hover:text-white' />
          </div>
        </div>

        {/* Chat big side-bar section */}
        <div className='bg-discord_channelbg flex flex-col min-w-max'>
          <h4 className='text-white flex font-bold text-sm items-center justify-between border-b border-gray-800 p-3 hover:bg-[#34373c]'>
            Hello Channel
            <ChevronDownIcon className='h-5 ml-2' />
          </h4>

          <div className='text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide'>
            <div className='flex items-center p-2 mb-2'>
              <ChevronDownIcon className='h-3 mr-2' />
              <h4 className='font-semibold'>Channels</h4>
              <PlusIcon
                className='h-6 ml-auto cursor-pointer hover:text-white'
                onClick={handleAddChannel}
              />
            </div>

            <div className='flex flex-col space-y-2 mb-4 px-2'>
              {/* map through all channels, and show it in realtime */}
              {channels?.docs.map((doc) => (
                <ChannelComponent
                  key={doc.id}
                  id={doc.id}
                  channelName={doc.data().channelName}
                />
              ))}
            </div>
          </div>

          {/* Chat side bar footer section */}

          <div className='bg-[#292b2f] p-2 flex justify-between items-center space-x-8'>
            <div className='flex items-center space-x-1'>
              <img
                src={user?.photoURL}
                alt='user-img'
                className='h-10 rounded-full cursor-pointer'
                onClick={handleLogout}
              />
              <h4 className='text-white text-xs font-medium'>
                {user?.displayName}
                <span className='text-[#b9bbbe] block'>
                  #{user?.uid.substring(0, 4)} <br /> Logout
                </span>
              </h4>
            </div>

            <div className='text-gray-400 flex justify-between items-center'>
              <div className='hover:bg-[#3a3c43] p-2  rounded-md'>
                <MicrophoneIcon className=' icon' />
              </div>
              <div className='hover:bg-[#3a3c43] p-2  rounded-md'>
                <PhoneIcon className=' icon' />
              </div>
              <div className='hover:bg-[#3a3c43] p-2  rounded-md'>
                <CogIcon className=' icon' />
              </div>
            </div>
          </div>
        </div>

        {/* Chat body section */}
        <div className='bg-[#36393f] flex-grow'>
          <ChatComponent />
        </div>
      </div>
    </>
  );
}

export default Channel;
