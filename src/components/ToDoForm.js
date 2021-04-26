import React, { useState, useEffect } from 'react';
import { saveNewToDo, updateToDo } from '../services/ToDoService'
import Input from './Input';
import '../styles/LoginForm.css';
import '../styles/main.css';


const ToDoForm = ({input, handleEditToDo, history, todo}) => {
  const [formData, setFormData] = useState({ id: "",title: "", isEdited: todo.isEdited});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData(todo)
   
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData.title)
    handleEditToDo(todo, formData.title)


  };

  const handleChange = ({ target: input }) => {
    const formDataClone = { ...formData };
    formDataClone[input.name] = input.value;
    setFormData(formDataClone);
  };

  return (
    <form onSubmit={handleSubmit}>  
        <Input
          name="title"
          onChange={handleChange}
          type="text"
          value={formData.title}
        />
        <button>Save</button>
    </form>
  );
};

export default ToDoForm;
