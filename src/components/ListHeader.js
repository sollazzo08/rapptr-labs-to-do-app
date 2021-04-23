import React from 'react';
import Button from './Button';
import Icon from './Icon'
import '../styles/ListStyles/listHeader.css';
import SearchBar from './SearchBar';

const ListHeader = ({ children, onClick }) => {
  /*
  contains  a search bar and button
  */
  return (
    <div className="list-header">
      <div>
        <SearchBar
          type="search"
          placeholder=" search..."
          IconComponent={<Icon name="search" />}
        />
      </div>
      <div>
        <Button onClick={onClick}>New</Button>
      </div>
    </div>
  );
};

export default ListHeader;
