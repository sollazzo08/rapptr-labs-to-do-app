import React, {useEffect, useState} from 'react';
import ListItem from './ListItem';
import Icon from './Icon';
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

  useEffect(() => {
    setTodos(data)
    console.log(data)
  },[])


  
  const handleDeleteToDo = (todo) => {

  
    const todosClone = todos.filter((t) => t.id !== todo.id);
    setTodos(todosClone);
  };
  const handleEditToDo = (id, input) => {
    
  // const todosClone = [...todos]
  //   const editedTodo = todosClone.map((todo) => {
  //     if(todo.id === id){
  //       todo.title = 'hello'
  //       console.log(todo.title)
  //     }
  //     return todo
  //   })
  //   setTodos(editedTodo)
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
                  <Icon name={faPencilAlt} onClick={handleEditToDo} />,
                  <Icon name={faTrashAlt} onClick={() => handleDeleteToDo(todo)} />,
                ]}
                onEdit={onEdit}
                Input={<ToDoForm />}
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
