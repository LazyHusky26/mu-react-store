import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { AppContext } from './App.jsx'

export default function Register() {
  const [user, setUser] = useState({});
  const { users, setUsers } = useContext(AppContext);
  const Navigate = useNavigate();
  const handleSubmit = () => {
    setUsers([...users, user]);
    Navigate('/Login')
  };
  // const [user, setUser] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const [count, setCount] = useState(0)
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  const [result, setResult] = useState('')
  const [showDetails, setShowDetails] = useState(false);
  // const [name, setName] = useState("Karthikeya")

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

  const consoleDetails = () => {
    console.log(user);
  }


  return (
    <div>
      <h1>Register</h1>
      {/* <p><input type="text" placeholder="Username" onChange={(e) => setUser({...user, name:e.target.value})}/></p> */}
      <p><input type="text" placeholder="Username" onChange={(e) => setUser({...user, name:e.target.value})}/></p>
      <p><input type="text" placeholder="Email" onChange={(e) => setUser({...user, email:e.target.value})} /></p>
      <p><input type="password" placeholder="Password" onChange={(e) => setUser({...user, pass:e.target.value})} /></p>
      <button onClick={handleSubmit}>Register</button>
      <p>Already have an account? <Link to="/Login">Login</Link></p>
      <hr />

      {/* <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>{name}</p> */}

      {/* {showDetails && (
        <div style={{ marginTop: '20px' }}>
          <h3>User Details</h3>
          <p><strong>Username:</strong> {user}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Password:</strong> {password}</p>
        </div>
      )} */}

      {/* <p>{count}</p>
      <p><button onClick={updateCount}>Click</button></p>

      <p><input type="number" onChange={(e) => setA(e.target.value)} />
      <input type="number" onChange={(e) => setB(e.target.value)} />
      <button onClick={findSum}>Submit</button></p>
      <p>{result}</p> */}
    </div>
  )
}
