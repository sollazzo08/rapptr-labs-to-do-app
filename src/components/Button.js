import React from 'react';
import '../styles/button.css';

const Button = ({ children, disable = false, onClick, style }) => {
  return (
    <button
      disable={disable}
      style={style}
      className="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
