const todos = [
  { id: 1, title: 'Workout', isEdited: false },
  { id: 2, title: 'Pay Bills', isEdited: false },
  { id: 3, title: 'Walk the Dog', isEdited: false },
  { id: 4, title: 'Get Lunch', isEdited: false },
  { id: 5, title: 'Zumba', isEdited: false },
  { id: 6, title: 'Get new shoes', isEdited: false },
  { id: 7, title: 'Pay Dad', isEdited: false },
];

export const getToDos = () => {
  return todos;
};

export const saveNewToDo = (todo) => {
  let newTodo = todos.find((t) => t.id === todo.id) || {};
  newTodo.title = todo.title;

  todos.push(newTodo);

  return newTodo;
};

export const updateToDo = (todo) => {
  let newTodo = todos.find((t) => t.id === todo.id) || {};
  newTodo.title = todo.title;
  newTodo.isEdited = true;

  return newTodo;
};
