import React from 'react';
import '../styles/LoginForm.css'

const Input = ({ error,label, IconComponent, name, onChange, placeholder, type, value }) => {
  return (
    <div className="login-input-container">
      <label className="login-label" htmlFor={name}>{label}</label>
      {!IconComponent}
      <input
        className="login-input"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Input;
