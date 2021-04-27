import React, { useState, useEffect } from 'react';
import Joi from 'joi-browser';
import { validateProperty } from '../services/validation';
import Button from './Button';
import Input from './Input';
import '../styles/LoginForm.css';
import '../styles/toDoForm.css';

const ListItemToDoForm = ({ handleEditToDo, todo }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    isEdited: false,
  });
  const [errors, setErrors] = useState({});

  const schema = {
    title: Joi.string().min(1).max(25).required(),
  };

  useEffect(() => {
    setFormData(todo);
  }, [todo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditToDo(todo, formData.title);
  };

  const handleChange = ({ target: input }) => {
    const errorsClone = { ...errors };
    const errorMessage = validateProperty(input, schema);
    if (errorMessage) errorsClone[input.name] = errorMessage;
    else delete errorsClone[input.name];

    const formDataClone = { ...formData };
    formDataClone[input.name] = input.value;
    setFormData(formDataClone);
    setErrors(errorsClone);
  };

  return (
    <form className="to-do-form" onSubmit={handleSubmit}>
      <div>
        <Input
          name="title"
          onChange={handleChange}
          type="text"
          value={formData.title}
        />
        {errors && <div className="input-error">{errors['title']}</div>}
      </div>
      <Button>Save</Button>
    </form>
  );
};

export default ListItemToDoForm;
