import React, { useState } from 'react';
import Image from '../data/logo.png';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle registration logic here
    const data = new FormData(event.currentTarget);

    const userData={
      firstName:data.get("firstname"),
      lastName:data.get("lastName"),
      idNumber:data.get("idNumber"),
      phoneNumber:data.get("phoneNumber"),
      email:data.get(ëmail),
      password:data.get("password")
    }

  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={styles.registerContainer}>
        <img src={Image} alt="" />
        <h2 style={styles.registerHeading}>Create Your Account</h2>
        <div style={styles.inputField}>
          <label htmlFor="firstName" style={styles.fieldLabel}>
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputField}>
          <label htmlFor="lastName" style={styles.fieldLabel}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputField}>
          <label htmlFor="idNumber" style={styles.fieldLabel}>
            ID Number
          </label>
          <input
            type="text"
            id="idNumber"
            placeholder="Enter your ID number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputField}>
          <label htmlFor="phoneNumber" style={styles.fieldLabel}>
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="Enter your phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputField}>
          <label htmlFor="email" style={styles.fieldLabel}>
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputField}>
          <label htmlFor="password" style={styles.fieldLabel}>
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.registerButton}>
          Register
        </button>
        <p style={styles.linkText}>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </form>
  );
};

const styles = {
  registerContainer: {
    width: '400px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '4px',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)',
  },
  registerHeading: {
    fontSize: '20px',
    margin: '10px 0',
  },
  registerText: {
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
  registerButton: {
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

export default RegisterForm;
