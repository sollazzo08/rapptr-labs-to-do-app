import React from 'react';
import {Link} from 'react-router-dom'
import Icon from './Icon'
import '../styles/ListStyles/listHeader.css';
import SearchBar from './SearchBar';
import '../styles/button.css'

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
      <Link
            to="/toDoList/new"
            className="button"
            style={{ marginBottom: 20 }}
          >
            New 
          </Link>
      </div>
    </div>
  );
};

export default ListHeader;
