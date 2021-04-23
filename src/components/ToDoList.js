import React from 'react';
import ListItem from './ListItem';
import Icon from './Icon';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import ListHeader from './ListHeader';
import Header from './Header';
import '../styles/main.css';
import '../styles/ToDoList.css'
const data = [
  { id: 1534553466, title: 'Workout' },
  { id: 2456456456, title: 'Pay Bills' },
  { id: 345645654, title: 'Walk the Dog' },
  { id: 4546456546, title: 'Get Lunch' },
];

const ToDoList = () => {
  const handleDeleteToDo = () => {
    console.log('Deleted');
  };
  const handleEditToDo = () => {
    console.log('Edited');
  };
  const handleAddToDo = () => {
    console.log('Added');
  };

  return (
    <div className="main">
      <div className="main-header">
        <Header>My To-Do List</Header>
      </div>
      <div className="todo-list-container">
        <div className="todo-list-header">
          <ListHeader onClick={handleAddToDo}>New</ListHeader>
        </div>
        <div className="todo-list-content">
          {data.map((todo) => {
            return (
              <ListItem
                key={todo.id}
                IconComponent={[
                  <Icon name={faPencilAlt} onClick={handleEditToDo} />,
                  <Icon name={faTrashAlt} onClick={handleDeleteToDo} />,
                ]}
                title={todo.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
