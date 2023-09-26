import React, { useEffect } from 'react'
import GoogleButton from 'react-google-button'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'



const Signin = () => {
  // Získání funkce pro přihlášení a uživateli
  const { googleSignIn, user } = UserAuth()
  // Získání funkce pro navigaci mezi stránkami
  const navigate = useNavigate()

  // Funkce pro obsluhu Google přihlášení
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn()
    } catch {
      console.log("error");
    }
  }

  // Efekt pro automatické přesměrování na /account po úspěšném přihlášení
  useEffect(() => {
    if (user != null) {
      navigate("/account")
    }
  }, [user])


  return (
    <div>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn} />
      </div>
    </div>
  )
}

export default Signin
