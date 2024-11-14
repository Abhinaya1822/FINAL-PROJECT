import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (username && email && password) {
      const newUser = { username, email, password };

      const response = await axios.post(`http://localhost:3001/newUser`, newUser);

      if (response.status === 201) {
        alert('Signup successful!');
        navigate('/login'); 
      } else {
        alert('Failed to create an account. Please try again.');
      }
    } else {
      alert('Please fill out all fields.');
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
      textAlign: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: '50px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      width: '350px',
      height: '350px',
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
    },
    login: {
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.form}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
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
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
          <div style={styles.login}>
            Already have an account? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
