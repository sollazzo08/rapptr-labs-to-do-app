import React from 'react';

const Input = ({ label, name, onChange, placeholder, value }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default Input;
