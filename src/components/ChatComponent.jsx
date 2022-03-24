import React, { useRef } from 'react';
import { HashtagIcon, SearchIcon } from '@heroicons/react/outline';
import {
  BellIcon,
  ChatIcon,
  UsersIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  PlusCircleIcon,
  GiftIcon,
  EmojiHappyIcon,
} from '@heroicons/react/solid';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../features/channelSlice';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import {
  collection,
  doc,
  orderBy,
  addDoc,
  serverTimestamp,
} from 'firebase/firestore';
import MessageComponent from './MessageComponent';

function ChatComponent() {
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [user] = useAuthState(auth);
  const inputRef = useRef('');
  const chatRef = useRef(null);

  const [messages] = useCollection(
    channelId && collection(db, 'channels', channelId, 'messages'),
    orderBy('timeStamp', 'asc')
  );

  // create sub collection 'message' within 'channel' collection
  async function SendMessage(e) {
    e.preventDefault();

    const docRef = doc(db, 'channels', channelId);
    const colRef = collection(docRef, 'messages');

    if (inputRef.currentvalue !== '') {
      try {
        await addDoc(colRef, {
          timestamp: serverTimestamp(),
          message: inputRef.current.value,
          name: user?.displayName,
          photoURL: user?.photoURL,
          email: user?.email,
        });
      } catch (err) {
        alert(err);
      }
    }

    // After message send, value should be
    inputRef.current.value = '';
    scrollToBottom();
  }

  function scrollToBottom() {
    chatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className='flex flex-col h-screen'>
      <header className='flex intems-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1'>
        <div className='flex items-center space-x-1'>
          <HashtagIcon className='h-6 text-custom_gray' />
          <h4 className='text-white font-semibold'>{channelName}</h4>
        </div>
        <div className='flex space-x-3'>
          <BellIcon className='icon' />
          <ChatIcon className='icon' />
          <UsersIcon className='icon' />
          <div className='flex bg-[#202225] text-xs p-1 rounded-md'>
            <input
              type='text'
              placeholder='search...'
              className='bg-transparent focus:outline-none text-white pl-1 placeholder-text_gray'
            />
            <SearchIcon className='h-4 text-custom_gray mr-1' />
          </div>
          <InboxIcon className='icon' />
          <QuestionMarkCircleIcon className='icon' />
        </div>
      </header>
      <main className='flex-grow overflow-y-scroll scrollbar-hide'>
        {messages?.docs.map((doc) => {
          const { message, timestamp, name, photoURL, email } = doc.data();

          return (
            <MessageComponent
              key={doc.id}
              id={doc.id}
              message={message}
              timestamp={timestamp}
              name={name}
              email={email}
              photoURL={photoURL}
            />
          );
        })}
        <div ref={chatRef} className='pb-16' />
      </main>

      <div ref={chatRef} className='pb-16' />
      <div className='flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg'>
        <PlusCircleIcon className='icon mr-4' />
        <form className=' flex flex-grow'>
          <input
            type='text'
            disabled={!channelId}
            placeholder={
              channelId ? `message #${channelName}` : 'Select channel'
            }
            className='bg-transparent focus:outline-none text-[#dcddde] w-full placeholder-custom_gray text-sm'
            ref={inputRef}
          />
          <button hidden type='submit' onClick={SendMessage}>
            Send
          </button>
          <GiftIcon className='icon mr-2' />
          <EmojiHappyIcon className='icon' />
        </form>
      </div>
    </div>
  );
}

export default ChatComponent;
