import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({ name, onClick, size}) => {

  return (
    <FontAwesomeIcon icon={name} onClick={onClick} size={40}/>
  )
}
 
export default Icon;