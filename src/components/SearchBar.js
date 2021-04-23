import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon'
import '../styles/searchBar.css'

const SearchBar = ({placeholder, type}) => {

  return (  
    <div className="search-bar">
  
      <Icon className="search-icon" name={faSearch}/>
      <input className="search-box" placeholder={placeholder} type={type} />
    </div>
  );
}
 
export default SearchBar;