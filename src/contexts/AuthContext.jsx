import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const AuthContext = createContext({
  user: null,
  login: () => Promise,
  register: () => Promise,
  resetPassword: () => Promise,
  forgotPassword: () => Promise,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const [user] = useAuthState(auth);

  useEffect(() => {
    console.log('The user is: ', user);
  }, [user]);

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function register(email, password, username) {
    return createUserWithEmailAndPassword(auth, email, password, username);
  }

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  const value = {
    user,
    signInWithGoogle,
    login,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
