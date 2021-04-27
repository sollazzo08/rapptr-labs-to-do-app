import React from 'react';
import '../styles/input.css';

const Input = ({
  error,
  label,
  IconComponent,
  name,
  onChange,
  placeholder,
  type,
  value,
}) => {
  return (
    <div className="input-container">
      <label className="input-label" htmlFor={name}>
        {label}
      </label>
      {!IconComponent}
      <input
        className="input"
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};

export default Input;
