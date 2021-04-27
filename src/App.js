import React from 'react';
import LoginForm from './components/LoginForm';
import ToDoList from './components/ToDoList';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route path="/toDoList" component={ToDoList} />
      <Route exact="/" component={LoginForm} />
    </Switch>
  );
}

export default App;
