import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header name="MU Store" />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          {/* <Home /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
