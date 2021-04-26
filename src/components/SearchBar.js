import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';
import '../styles/searchBar.css';

const SearchBar = ({ onChange, placeholder, type, value }) => {
  return (
    <div className="search-bar">
      <Icon className="search-icon" name={faSearch} />
      <input
        className="search-box"
        onChange={(e) => onChange(e.currentTarget.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </div>
  );
};

export default SearchBar;
