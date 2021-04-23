import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({color="000", name, onClick, size}) => {

  return (
    <FontAwesomeIcon icon={name} onClick={onClick} style={{color}}/>
  )
}
 
export default Icon;