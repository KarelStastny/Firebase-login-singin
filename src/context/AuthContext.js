import React, { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, SignOut, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../backend/firebase';


// Vytvoření kontextu s výchozí hodnotou
const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
  // Globální stav pro uchování aktuálního uživatele
  const [user, setUser] = useState({})

  // Funkce pro přihlášení pomocí google
  const googleSignIn = ()  => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider)
  }

  // Funkce pro odhlášení
  const logOut = () => {
    signOut(auth)
  }

  // Sledování stavu autentizace
  useEffect(() => {
    const unsubscrible = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      console.log("User", currentUser);
    })

    // Zrušení sledování když kompoennata není aktivní
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

// Export kontextu
export const UserAuth = () => {
  return useContext(AuthContext)
}