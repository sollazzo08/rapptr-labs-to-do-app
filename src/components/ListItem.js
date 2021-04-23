import React from 'react';
import '../styles/ListStyles/listItem.css'

const ListItem = ({ title, IconComponent }) => {
  return (
    <div className="list-item">
      <div className="list-title">{title}</div>
      <div className="list-icons">{IconComponent}</div>
    </div>
  );
};

export default ListItem;
