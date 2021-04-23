import React from 'react';


const ListItem = ({ onDelete, onEdit, title, IconComponent }) => {
  return ( 
    <div className="list-item">
      <div className="list-title">{title}</div>
      <div className="list-icons">
        <IconComponent/>
        <IconComponent/>
      </div>
    </div>
  );
}
 
export default ListItem;