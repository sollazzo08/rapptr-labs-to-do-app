import React from 'react';
import ListItem from './ListItem'

const data = [
  {id: 1, title: 'Workout'},
  {id: 2, title: 'Pay Bills'},
  {id: 3, title: 'Walk the Dog'},
  {id: 4, title: 'Get Lunch'},
]



const ToDoList = () => {
  /* HEADER
      - search bar
      - New Button
     LIST
     LIST ITEM 
  */  
  const handleDelete = () => {
    console.log('Deleted')
  }
  const handleEdit = () => {
    console.log('Edited')
  }


  return (  
    <div className="to-do-list-container">
      {data.map((todo) => {
        return (
          <ListItem
            key={todo.id} 
            title={todo.title}

          />
        )
      })}
    </div>
  );
}
 
export default ToDoList;