import React from 'react';
import '../styles/button.css';

interface ButtonProps {
  children: React.ReactChildren
  onClick: React.MouseEventHandler
  style: React.CSSProperties
}

const Button: React.FC<ButtonProps> = ({ children, onClick, style }) => {
  return (
    <button style={style} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
