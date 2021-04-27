const todos = [
  { id: 1, title: 'Workout', isEdited: false },
  { id: 2, title: 'Pay Bills', isEdited: false },
  { id: 3, title: 'Walk the Dog', isEdited: false },
];

export const getToDos = () => {
  return todos;
};

export const saveNewToDo = (todo) => {
 
 
  let newTodo = todos.find((t) => t.id === todo.id) || {};
  newTodo.id = todo.id
  newTodo.title = todo.title;
  newTodo.isEdited = false

  if(!newTodo.id){
    todos.push(todo)
  }

  return newTodo;
};

export const updateToDo = (todo) => {
  let newTodo = todos.find((t) => t.id === todo.id) || {};
  newTodo.title = todo.title;
  newTodo.isEdited = true;

  return newTodo;
};
