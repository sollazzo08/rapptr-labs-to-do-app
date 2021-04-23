import React, { useState } from 'react';
import Header from './Header';
import Input from './Input';
import * as yup from 'yup';
import '../styles/LoginForm.css';
import '../styles/main.css'

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  // let schema = yup.object().shape({
  //   email: yup.string().email().required(),
  //   password: yup.string().required()

  // })

  // const validate = async () => {

  //    await schema.validate(formData).catch(function (err) {
  //       console.log(err.errors)
  //     })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate()
  };

  const handleChange = ({ target: input }) => {
    const formDataClone = { ...formData };
    formDataClone[input.name] = input.value;
    setFormData(formDataClone);
  };

  return (
    <div className="main">
      <div className="main-header">
        <Header>Rapptr Labs</Header>
      </div>
      <div className="login-container">
        <form onSubmit={handleSubmit}>
          <div className="login-input-container">
            <Input
              label="Email"
              name="email"
              onChange={handleChange}
              placeholder="user@rapptrlabs.com"
              type="text"
              value={formData.email}
            />
            <Input
              label="Password"
              name="password"
              onChange={handleChange}
              placeholder=""
              type="text"
              value={formData.password}
            />
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
