import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = ({backgroundColor="fff", name, onClick, size}) => {

  return (
    <FontAwesomeIcon name={name} onClick={onClick}/>
  )
}
 
export default Icon;