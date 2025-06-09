import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Register() {
  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [count, setCount] = useState(0)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState('')
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    alert("Hello")
  }

  const updateCount = () => {
    setCount(count + 1)
  }

  const findSum = () => {
    setResult(Number(a) + Number(b));
  }

  const printDetails = () => {
    setShowDetails(true)
  }

  return (
    <div>
      <h1>Register</h1>
      <p><input type="text" placeholder="Username" onChange={(e) => setUser(e.target.value)}/></p>
      <p><input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} /></p>
      <p><input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /></p>
      <button onClick={printDetails}>Register</button>
      <p>Already have an account? <Link to="/Login">Login</Link></p>
      <hr />

      {showDetails && (
        <div style={{ marginTop: '20px' }}>
          <h3>User Details</h3>
          <p><strong>Username:</strong> {user}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Password:</strong> {password}</p>
        </div>
      )}

      {/* <p>{count}</p>
      <p><button onClick={updateCount}>Click</button></p>

      <p><input type="number" onChange={(e) => setA(e.target.value)} />
      <input type="number" onChange={(e) => setB(e.target.value)} />
      <button onClick={findSum}>Submit</button></p>
      <p>{result}</p> */}
    </div>
  )
}
