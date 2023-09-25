import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Account = () => {
  const {logOut, user} = UserAuth()

  const handleSignOut = async () => {
    try {
        await logOut()
    } catch {
        console.log("error");
        
    }
}

  return (
    <div className='w-[300px] m-auto'>
        <h1 className='text-center text-2xl font-bold pt-12'>
            <div>
                
            <p>
                Welcome, {user?.displayName}
            </p>
            </div>
            <button onClick={handleSignOut} className='border py-2 px-5 mt-10'>Logout</button>
        </h1>
      
    </div>
  )
}

export default Account
