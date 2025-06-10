import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import { AppContext } from './App'
import { useContext } from 'react'

export default function Header({name}) {
  const { email } = useContext(AppContext);
  return (
    <div className='App-Header-Row' style={{backgroundColor: "pink"}}>
        <div>
            <h1>{name}</h1>
        </div>
        <div>
            <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Cart">Cart</Link>
                </li>
                <li>
                  {!email ? <Link to="/Login">Login</Link>: <Link to="/">Logout</Link>}
                </li>
            </ul>
        </div>
    </div>
  )
}
