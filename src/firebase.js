import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const auth = firebase
  .initializeApp({
    apiKey: 'AIzaSyDNwft5yCMD53GNCNWJctMw-O1HmvdKJdY',
    authDomain: 'chatapp2-2ce57.firebaseapp.com',
    projectId: 'chatapp2-2ce57',
    storageBucket: 'chatapp2-2ce57.appspot.com',
    messagingSenderId: '519731951168',
    appId: '1:519731951168:web:eaad3b94fb71040fdcd1a5',
    measurementId: 'G-JXHBNS4ZVD',
  })
  .auth();
