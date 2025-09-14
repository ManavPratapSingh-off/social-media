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
import useCurrentUser from './hooks/useCurrentUser.jsx'
import { useSelector } from 'react-redux'

function App() {
  useCurrentUser()
  const {userData} = useSelector(state=>state.user)

  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/home' element={userData?<Home /> : <SignIn/>} />
      <Route path='/forgotPassword' element={<ForgotPassword />} />
    </Routes>
  )
}

export default App
