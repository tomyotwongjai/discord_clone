import { GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: 'chatapp2-2ce57.firebaseapp.com',
  projectId: 'chatapp2-2ce57',
  storageBucket: 'chatapp2-2ce57.appspot.com',
  messagingSenderId: `${process.env.REACT_APP_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};

// init firebase app
const app = initializeApp(firebaseConfig);

//   init firebase services
const db = getFirestore(app);

// firebase authentication
const auth = getAuth();

// added authentication provider
const provider = new GoogleAuthProvider();

/*  this act for user to select an account every time they sign in */

// provider.setCustomParameters({
//   prompt: 'select_account',
// });

export { auth, provider, db };
