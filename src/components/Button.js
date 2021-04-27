import React from 'react';
import '../styles/button.css';

const Button = ({ children, onClick, style }) => {
  return (
    <button
      style={style}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
