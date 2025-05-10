import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'

function App() {

  return (
    <div>
      <Routes>
      <Route path='/' element={<Navigate to={'/login'} />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/home' element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App
