import React, { useState } from 'react';
import Input from './Input';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  
  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  
  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    
    if (!validateEmail(email)) {
      formErrors.email = 'Please enter a valid email address';
    }

    
    if (!validatePassword(password)) {
      formErrors.password = 'Password must be at least 8 characters long';
    }

   
    if (password !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setFormSubmitted(false);
    } else {
      setErrors({});
      setFormSubmitted(true);
      alert('Form submitted successfully');
    }
  };

  return (
    <div className="form-container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
          style={{ borderColor: errors.email ? 'red' : 'green' }}
          label="Email"
        />
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
          style={{ borderColor: errors.password ? 'red' : 'green' }}
          label="Password"
        />
        <Input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
          style={{ borderColor: errors.confirmPassword ? 'red' : 'green' }}
          label="Confirm Password"
        />
        <button type="submit">Submit</button>
      </form>

      {formSubmitted && <p className="success-message">Your form was submitted successfully!</p>}
    </div>
  );
};

export default Form;


