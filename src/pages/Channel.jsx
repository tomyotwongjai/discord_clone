// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { auth } from '../firebase';

// const Channel = () => {
//   const navigate = useNavigate();
//   const { user } = useAuthState(auth);

//   const handleLogout = async () => {
//     await auth.signOut();

//     navigate('/');
//   };

//   useEffect(() => {
//     if (user) {
//       navigate('/');

//       return;
//     }
//   }, [user, navigate]);

//   return (
//     <div onClick={handleLogout} className='text-red-500'>
//       Logout
//     </div>
//   );
// };

// export default Channel;
import React from 'react';
import { ChevronDownIcon, PlusIcon } from '@heroicons/react/outline';
import { useNavigate } from 'react-router-dom';
// import { MicrophoneIcon, PhoneIcon, CogIcon } from '@heroicons/react/solid';
import ServerIcon from '../container/ServerIcon';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import ChannelComponent from '../components/ChannelComponent';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function Channel() {
  const navigate = useNavigate();
  // const [user] = useAuthState(auth);
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
          created: Timestamp.now(),
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <>
      <div className='flex h-screen'>
        <div className='flex flex-col  space-y-3 bg-[#202225] p-3 min-w-max'>
          <div className='server-default hover:bg-discord_purple'>
            <img src='https://rb.gy/kuaslg' alt='' className='h-5' />
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
        <div className='bg-discord_channelbg flex-col min-w-max'>
          <h2 className='text-white flex font-bold text-sm items-center justify-between border-b border-gray-800 p-3 hover:bg-[#34373c]'>
            Hello Channel
            <ChevronDownIcon className='h-5 ml-2' />
          </h2>
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
              {/* map through all chennels, and show it in realtime */}
              {channels?.docs.map((doc) => (
                <ChannelComponent
                  key={doc.id}
                  id={doc.id}
                  channelName={doc.data().channelName}
                />
              ))}

              <button
                onClick={handleLogout}
                className='text-red-500 cursor-pointer'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Channel;
