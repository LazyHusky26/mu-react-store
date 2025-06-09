import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <h1>Login Form</h1>
      <p><input type="text" placeholder="Username" /></p>
      <p><input type="password" placeholder='Password' /></p>
      <button>Login</button>
      <p>Don't have an account? <Link to="/Register">Register</Link></p>
    </div>
  )
}
