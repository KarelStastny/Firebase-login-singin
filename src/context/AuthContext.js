import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, SignOut, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../backend/firebase';


// Vytvořte kontext s výchozí hodnotou
const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({})

  const googleSignIn = ()  => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
  }

  const logOut = () => {
    signOut(auth)
  }
  useEffect(() => {
    const unsubscrible = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log("User", currentUser);
    })
    return () => {
      unsubscrible()
    }
  },[])

  return(
    <AuthContext.Provider value={{googleSignIn, logOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}