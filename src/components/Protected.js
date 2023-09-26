import React from 'react'
import {Navigate} from "react-router-dom"
import {UserAuth} from "../context/AuthContext"

const Protected = ({children}) => {
  // Získání aktuálního uživatele
  const {user} = UserAuth()

  // Pokud uživatel není přihlášen přesměrovat na úvodní stranu
  if(!user){
    return(<Navigate to="/" />)
  }

  // Vrátí potomky komponenty, která je chráněna přihlášením
  return children
}

export default Protected
