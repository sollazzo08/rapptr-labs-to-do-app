import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ name, onClick }) => {
  return <FontAwesomeIcon icon={name} onClick={onClick} />;
};

export default Icon;
