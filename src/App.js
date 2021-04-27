import React from 'react';
import LoginForm from './components/LoginForm';
import ToDoList from './components/ToDoList';
import { Redirect, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

function App() {
  return (
    <Switch>
      <Route path="/toDoList" component={ToDoList} />
      <Route path="/not-found" component={NotFound} />
      <Route path="/" exact component={LoginForm} />
      <Redirect to="/not-found" />
    </Switch>
  );
}

export default App;
