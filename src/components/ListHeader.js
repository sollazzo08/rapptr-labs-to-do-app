import React from 'react';
import { Link } from 'react-router-dom'
import Button from './Button';
import Icon from './Icon'
import '../styles/ListStyles/listHeader.css';
import SearchBar from './SearchBar';

const ListHeader = ({ onClick, onChange, value }) => {
  /*
  contains  a search bar and button
  */
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
        <Link to="/todo/new">
          <Button onClick={onClick}>New</Button>
        </Link>
      </div>
    </div>
  );
};

export default ListHeader;
