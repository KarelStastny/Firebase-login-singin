import React from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from "../context/AuthContext"


const Navbar = () => {
    // Získání aktuálního uživatele a funkce pro odhlášení z kontextu autentizace
    const { user, logOut } = UserAuth()

    // Funkce pro odhlášení uživatele
    const handleSignOut = async () => {
        try {
            await logOut()
        } catch {
            console.log("error");
        }
    }

    return (
        <div className='flex justify-between bg-gray-200 w-full p-4'>
            <h1 className='text-center text-2xl font-bold'>Firebase Google Authentication</h1>
            {user?.displayName ? <button onClick={handleSignOut}> Odhlásit se </button> : <Link to="/signin">Přihlásit se</Link>}

        </div>
    )
}

export default Navbar
