import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';
import Icon from './Icon';
import {Link} from 'react-router-dom'
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import ListHeader from './ListHeader';
import Input from './Input'
import Header from './Header';
import '../styles/main.css';
import '../styles/ToDoList.css'
import ToDoForm from './ToDoForm';

const data = [
  { id: 1, title: 'Workout' },
  { id: 2, title: 'Pay Bills' },
  { id: 3, title: 'Walk the Dog' },
  { id: 4, title: 'Get Lunch' },
];

const ToDoList = () => {

  const [todos, setTodos] = useState([]);
  const [onEdit, setOnEdit] = useState(false)
  const [input, setInput] = useState([])

  useEffect(() => {
    setTodos(data)
  
  },[])


  
  const handleDeleteToDo = (todo) => {

  
    const todosClone = todos.filter((t) => t.id !== todo.id);
    setTodos(todosClone);
  };
  const handleEditToDo = (todo, title) => {
    
  const todosClone = [...todos]
    const updatedTodo = todosClone.map((t) => {
      if(t.id === todo.id){
        t.title = title
      
      }
      return t
    })
    setOnEdit(true)
    setInput(title)
    //setTodos(updatedTodo)
  }



 
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
          {todos.map((todo) => {
            return (
              <ListItem
                key={todo.id}
                IconComponent={[
                  <Link
                    to={`/todo/${todo.id}`}
                  >
                    <Icon name={faPencilAlt} onClick={() => handleEditToDo(todo, todo.title)} />
                  </Link>,
                  <Icon name={faTrashAlt} onClick={() => handleDeleteToDo(todo)} />,
                ]}
                onEdit={onEdit}
                Input={<ToDoForm input={input}/>}
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
