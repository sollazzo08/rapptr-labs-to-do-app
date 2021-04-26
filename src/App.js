import LoginForm from './components/LoginForm';
import ToDoList from './components/ToDoList';
import { Route, Switch } from 'react-router-dom';
import ToDoForm from './components/ToDoForm';
function App() {
  return (
    <Switch>
      <Route exact path="/todo/:id" component={ToDoForm}/>
      <Route path="/toDo/new" component={ToDoForm}/>
      <Route path="/toDoList" component={ToDoList} />
      <Route exact="/" component={LoginForm} />
    </Switch>
  );
}

export default App;
