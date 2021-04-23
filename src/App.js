import './styles/App.css';
import LoginForm from './components/LoginForm'
import ToDoList from './components/ToDoList'

import {Route, Switch } from 'react-router-dom'
function App() {
  return (
    <Switch>
      <Route path="/toDoList" component={ToDoList} />
      <Route exact="/" component={LoginForm}/>
    <div className="App">
     <LoginForm />
    </div>

    </Switch>
  );
}

export default App;
