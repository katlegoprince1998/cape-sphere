import React, { useState } from 'react';
import Image from "../data/logo.png";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    // handle login logic here
    window.location.href = "/courses";
    const loggedIn = await login(email, password);
    setIsLoggedIn(loggedIn);
    if (loggedIn) {
        alert("Success");
      // Store token/user info in local storage or session storage
      localStorage.setItem("isLoggedIn", true);
      // Redirect to your app page
      // (Replace with your actual redirect logic using react-router-dom)
      window.location.href = "../App.js";
    } else {
      // Show error message
      alert("Invalid username or password!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={styles.loginContainer}>
        <img src={Image} alt="" />
        <h2 style={styles.loginHeading}>Welcome Back!</h2>
        <p style={styles.loginText}>Enter your email and password to log in.</p>
        <div style={styles.inputField}>
          <label htmlFor="email" style={styles.fieldLabel}>Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputField}>
          <label htmlFor="password" style={styles.fieldLabel}>Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.checkboxContainer}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me" style={styles.checkboxLabel}>Remember me</label>
        </div>
        <button type="submit" style={styles.loginButton}>Login</button>
        <p style={styles.linkText}>Don't have an account? <a href="/register">Sign Up</a></p>
      </div>
    </form>
  );
};

const styles = {
  loginContainer: {
    width: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)',
  },
  loginHeading: {
    fontSize: '20px',
    margin: '10px 0',
  },
  loginText: {
    fontSize: '14px',
    color: '#777',
  },
  inputField: {
    marginBottom: '15px',
  },
  fieldLabel: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  checkboxContainer: {
    marginBottom: '15px',
  },
  checkboxLabel: {
    marginLeft: '5px',
  },
  loginButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#333',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  linkText: {
    color: '#333',
    textDecoration: 'none',
  },
};

export default LoginForm;
