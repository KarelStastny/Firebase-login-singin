import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Signin from './pages/Signin'
import Account from './pages/Account'
import { AuthContextProvider } from './context/AuthContext'
import Protected from './components/Protected'


const App = () => {
  return (
    <div>
      <AuthContextProvider>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/account" element={<Protected><Account /></Protected>} />
        </Routes>

      </AuthContextProvider>


    </div>
  )
}

export default App
