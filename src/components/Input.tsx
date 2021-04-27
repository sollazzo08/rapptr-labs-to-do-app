import React from 'react';
import '../styles/input.css';

interface InputProps  {
  error : object
  label : string
  IconComponent : JSX.Element
  name : string
  onChange : React.ChangeEventHandler<HTMLInputElement>
  placeholder : string
  type : string
  value : string
}

const Input: React.FC<InputProps> = ({
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
