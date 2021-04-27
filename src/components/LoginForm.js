import React, { useState } from 'react';
import Joi from 'joi-browser';
import { login } from '../services/authServices';
import Icon from '../components/Icon';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
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

  const validate = () => {
    const result = Joi.validate(formData, schema, {
      abortEarly: false,
    });

    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = {
      [name]: value, //dynmaically create property fields using computed propertys
    };

    const schemaClone = {
      [name]: schema[name],
    };
    const { error } = Joi.validate(obj, schemaClone);

    return error ? error.details[0].message : null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    setErrors(errors || {});
    if (errors) return;

    props.history.push('/toDoList');
    try {
      const { email, password } = formData;
      await login(email, password);
    } catch (error) {
      if (error.response) {
        const errorsClone = { ...errors };
        errorsClone.username = error.response.data;

        setErrors(errorsClone);
      }
    }

    console.log('hey we have submitted the form');
  };

  const handleChange = ({ target: input }) => {
    const errorsClone = { ...errors };
    const errorMessage = validateProperty(input);
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
            <button className="login-button" disabled={validate()}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
