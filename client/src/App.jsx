import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/landing.jsx'
import SignIn from './pages/signIn.jsx'
import SignUp from './pages/signUp.jsx'
import Home from './pages/home.jsx'
import ForgotPassword from './pages/forgotPassword.jsx'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signIn' element={<SignIn />} />
      <Route path='/signUp' element={<SignUp />} />
      <Route path='/home' element={<Home />} />
      <Route path='/forgotPassword' element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
