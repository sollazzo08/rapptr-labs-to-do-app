import React from 'react';
import Button from './Button.tsx';
import Icon from './Icon';
import '../styles/ListStyles/listHeader.css';
import SearchBar from './SearchBar';

const ListHeader = ({ onClick, onChange, value }) => {
  return (
    <div className="list-header">
      <div>
        <SearchBar
          IconComponent={<Icon name="search" />}
          onChange={onChange}
          placeholder=" search..."
          type="search"
          value={value}
        />
      </div>
      <div>
        <Button onClick={onClick}>New</Button>
      </div>
  
    </div>
  );
};

export default ListHeader;
