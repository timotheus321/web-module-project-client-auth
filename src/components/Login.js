import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {
    const { navigate } = useNavigate();
    const [cred, setCred] = useState({
        username:"",
        password:""
    });

    const handleChange = (e) => {
        setCred({
            ...cred,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:9000/api/login', cred)
            .then (response => {
                localStorage.setItem("token", response.data.payload)
                navigate('/friends')
    })
    }
    return (<div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">Username:</label>
        <input onChange={handleChange}id="username" name='username' />
        </div>
        <div>
        <label htmlFor="password">Password:</label>
        <input onChange={handleChange} name="password" type="password" id="password"/>
        </div>
        <button>Submit</button>
      </form>
      </div>)
  }
  export default Login;