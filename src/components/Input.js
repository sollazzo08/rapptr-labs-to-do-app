import React from 'react';

const Input = ({ label, name, onChange, placeholder, type, value }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </>
  );
};

export default Input;
