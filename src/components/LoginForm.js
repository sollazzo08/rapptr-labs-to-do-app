import React, { useState } from 'react';
import Joi from 'joi-browser';
import Icon from '../components/Icon';
import { validate, validateProperty } from '../services/validation';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { login } from '../api/auth';
import Header from './Header';
import Input from './Input';
import '../styles/LoginForm.css';
import '../styles/main.css';

const LoginForm = (props) => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const schema = {
    email: Joi.string().email().max(50).required().label('Email'),
    password: Joi.string().min(4).max(16).required().label('Password'),
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(formData, schema);
    setErrors(errors || {});
    if (errors) return;

    // I forced the login because of the CORS error I encounterd
    props.history.push('/toDoList');
    // This catch never gets hit because the CORS is stopping the endpoint from
    // recieving a response

    try {
      const { email, password } = formData;
      await login(email, password);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500
      ) {
        const errorsClone = { ...errors };
        errorsClone.username = error.response.data;
        setErrors(errorsClone);
      }
    }
  };

  const handleChange = ({ target: input }) => {
    const errorsClone = { ...errors };
    const errorMessage = validateProperty(input, schema);
    if (errorMessage) errorsClone[input.name] = errorMessage;
    else delete errorsClone[input.name];

    const formDataClone = { ...formData };
    formDataClone[input.name] = input.value;
    setFormData(formDataClone);
    setErrors(errorsClone);
  };

  return (
    <div className="main">
      <div className="main-header">
        <Header>Rapptr Labs</Header>
      </div>
      <div className="login-container">
        <div className="login-welcome">Welcome Back!</div>
        <form onSubmit={handleSubmit}>
          <div className="login-input-container">
            <div className="login-inputs">
              <Input
                label="Email"
                name="email"
                IconComponent={<Icon className="login-icon" name={faUser} />}
                onChange={handleChange}
                placeholder=" user@rapptrlabs.com"
                type="email"
                value={formData.email}
                error={errors['email']}
              />
            </div>
            <div className="login-inputs">
              <Input
                label="Password"
                name="password"
                IconComponent={<Icon className="login-icon" name={faLock} />}
                onChange={handleChange}
                placeholder=" Must be at least 4 characters"
                type="password"
                value={formData.password}
                error={errors['password']}
              />
            </div>
            <button
              className="login-button"
              disabled={validate(formData, schema)}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
