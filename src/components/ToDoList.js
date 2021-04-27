import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import Icon from './Icon';
import { getToDos } from '../services/ToDoService';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import ListHeader from './ListHeader';
import Header from './Header';
import ListItemToDoForm from './ListItemToDoForm';
import Button from './Button';
import '../styles/main.css';
import '../styles/ToDoList.css';
import ToDoForm from './ToDoForm';

const ToDoList = (props) => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [toggleNewTodoForm, setToggleNewTodoForm] = useState(false);

  useEffect(() => {
    setTodos(getToDos());
  }, []);

  const handleDeleteToDo = (todo) => {
    const todosClone = todos.filter((t) => t.id !== todo.id);
    setTodos(todosClone);
  };

  const handleEditToDo = (todo, newText) => {
    const todosClone = [...todos];
    todosClone.map((t) => {
      if (t.id === todo.id) {
        t.title = newText;
        t.isEdited = !todo.isEdited;
      }
      return t;
    });

    setTodos(todosClone);
  };
  const toggleNewToDoForm = () => {
    setToggleNewTodoForm(true);
  };
  const handleAddToDo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const handleSearchToDo = (query) => {
    setSearchQuery(query);
  };

  const getPageData = () => {
    let todoList = todos;
    if (searchQuery)
      todoList = todos.filter((t) =>
        t.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    return { data: todoList };
  };

  const { data: todoList } = getPageData();
  return (
    <>
      <div className="main">
        <Button
          style={{ position: 'absolute', top: 10, left: 10 }}
          onClick={() => props.history.push('/')}
        >
          Logout
        </Button>
        <div className="main-header">
          <Header>My To-Do List</Header>
        </div>
        <div className="todo-list-container">
          <div className="todo-list-header">
            <ListHeader
              data={todos}
              value={searchQuery}
              onChange={handleSearchToDo}
              onClick={toggleNewToDoForm}
            >
              New
            </ListHeader>
            {toggleNewTodoForm && (
              <ToDoForm
                data={todos}
                handleAddToDo={handleAddToDo}
                setToggleNewTodoForm={setToggleNewTodoForm}
              />
            )}
          </div>
          <div className="todo-list-content">
            {todoList.map((todo) =>
              !(todo.isEdited === true) ? (
                <ListItem
                  key={todo.id}
                  IconComponent={[
                    <Icon
                      name={faPencilAlt}
                      onClick={() => handleEditToDo(todo, todo.title)}
                    />,
                    <Icon
                      name={faTrashAlt}
                      onClick={() => handleDeleteToDo(todo)}
                    />,
                  ]}
                  id={todo.id}
                  title={todo.title}
                />
              ) : (
                <ListItemToDoForm todo={todo} handleEditToDo={handleEditToDo} />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
