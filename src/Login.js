import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await axios.get(`http://localhost:3001/newUser`, {
      params: {
        email,
        password
      }
    });

    // Check if the user exists
    const user = response.data.find((user) => user.email === email && user.password === password);

    if (user) {
      navigate('/home');  // Navigate to home page on successful login
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  const styles = {
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundImage: 'url("https://financeonamission.com/wp-content/uploads/2023/08/data-visualozation.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    form: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: '50px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '350px',
      height: '300px',
      textAlign: 'center',
    },
    input: {
      width: '100%',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    button: {
      width: '100px',
      padding: '10px',
      backgroundColor: 'blue',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '20px',
    },
    signup: {
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />
          
          <button type="submit" style={styles.button}>Login</button>
          <div style={styles.signup}>
            Don't have an account? <a href="/signup">Sign up</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
