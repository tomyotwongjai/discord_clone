import { GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDNwft5yCMD53GNCNWJctMw-O1HmvdKJdY',
  authDomain: 'chatapp2-2ce57.firebaseapp.com',
  projectId: 'chatapp2-2ce57',
  storageBucket: 'chatapp2-2ce57.appspot.com',
  messagingSenderId: '519731951168',
  appId: '1:519731951168:web:eaad3b94fb71040fdcd1a5',
  measurementId: 'G-JXHBNS4ZVD',
};

// init firebase app
const app = initializeApp(firebaseConfig);

//   init firebase services
const db = getFirestore(app);

// firebase authentication
const auth = getAuth(app);

// added authentication provider
const provider = new GoogleAuthProvider();

/*  this act for user to select an account every time they sign in */

// provider.setCustomParameters({
//   prompt: 'select_account',
// });

export { auth, provider, db };
