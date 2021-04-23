import React from 'react';

const ListHeader = ({ children, onClick }) => {
  /*
  contains  a search bar and button
  */
  return (
    <div className="list-header">
      <input type="search" />
      <button onClick={onClick}>{children}</button>
    </div>
  
  );
};

export default ListHeader;
