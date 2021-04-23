import React from 'react';
import '../styles/ListStyles/listItem.css'

const ListItem = ({ onEdit, title, Input, IconComponent }) => {

  return (
    <div className="list-item">
      {onEdit ? <input type="text" /> : <div className="list-title">{title}</div>}
      <div className="list-icons">
      <div id="icon-pencil" className="list-icon">{IconComponent[0]}</div>
      <div id="icon-trash" className="list-icon">{IconComponent[1]}</div>
      </div>
    </div>
  );
};

export default ListItem;
