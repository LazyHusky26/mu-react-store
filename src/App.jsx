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
import Logout from './Logout.jsx'
import Order from './Order.jsx'
import Product from './Product.jsx'
import Test from './Test.jsx'
export const AppContext = createContext()

function App() {
    const [users, setUsers] = useState([]);
    const [cart, setCart] = useState({});
    const [email, setEmail] = useState('');
    const [orders, setOrders] = useState([]);
  return (
    <div>
      <AppContext.Provider value={{users, setUsers, cart, setCart, email, setEmail, orders, setOrders}}>
        <BrowserRouter>
          <Header name="MU Store" />
          <Routes>
            <Route index element={<Test />} />
            <Route path="/" element={<Test />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/Order" element={<Order />} />
            {/* <Home /> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  )
}

export default App
