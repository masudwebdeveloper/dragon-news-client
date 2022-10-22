import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   const providerLogin = (provider) => {
      setLoading(true)
      return signInWithPopup(auth, provider)
   }

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const updateUserPorife = (profile) => {
      return updateProfile(auth.currentUser, profile)
   }

   const userLogin = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password);
   }

   const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser);
   }

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         if (currentUser === null || currentUser.emailVerified) {
            setUser(currentUser);
         }
         setLoading(false)
      })
      return () => {
         unsubscribe();
      }
   }, [])
   
   const logOut = () => {
      setLoading(true)
      return signOut(auth)
   }
 
   const authInfo = {
      user,
      loading,
      updateUserPorife,
      providerLogin,
      logOut,
      verifyEmail,
      createUser,
      userLogin,
      setLoading
   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;