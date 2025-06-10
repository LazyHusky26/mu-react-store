import { useState, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Cart from './Cart.jsx'
export const AppContext = createContext()

function App() {
    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState({});
  return (
    <div>
      <AppContext.Provider value={{users, setUsers, cart, setCart}}>
        <BrowserRouter>
          <Header name="MU Store" />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Cart" element={<Cart />} />
            {/* <Home /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App
