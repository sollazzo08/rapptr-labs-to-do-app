import React, { useState } from 'react';
import Input from './Input'
import * as yup from 'yup'
import '../styles/LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({})

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
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className="login-input-container">
          <Input
            label='Email' 
            name="email"
            onChange={handleChange}
            placeholder="user@rapptrlabs.com"
            value={formData.email}
          />
          <Input
            label='Password' 
            name="password"
            onChange={handleChange}
            placeholder=""
            value={formData.password}
          />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
