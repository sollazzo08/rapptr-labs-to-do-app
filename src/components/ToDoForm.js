import React, { useState, useEffect } from 'react';
import Joi from 'joi-browser';
import Button from './Button';
import Input from './Input';
import '../styles/LoginForm.css';
import '../styles/main.css';

const ToDoForm = ({ handleEditToDo, todo }) => {
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    isEdited: todo.isEdited,
  });
  const [errors, setErrors] = useState({});

  const schema = {
    title: Joi.string().min(1).max(25).required(),
  };

  const validateProperty = ({ name, value }) => {
    const obj = {
      [name]: value, //dynmaically create property fields using computed propertys
    };

    const schemaClone = {
      [name]: schema[name],
    };
    const { error } = Joi.validate(obj, schemaClone);

    return error ? error.details[0].message : null;
  };

  useEffect(() => {
    setFormData(todo);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditToDo(todo, formData.title);
  };

  const handleChange = ({ target: input }) => {
    const errorsClone = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) errorsClone[input.name] = errorMessage;
    else delete errorsClone[input.name];

    const formDataClone = { ...formData };
    formDataClone[input.name] = input.value;
    setFormData(formDataClone);
    setErrors(errorsClone);
  };

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '30px',
        paddingRight: '30px',
        borderTop: '2px solid',
        alignItems: 'center',
        borderColor: 'black',
      }}
      onSubmit={handleSubmit}
    >
      <div>
        <Input
          name="title"
          onChange={handleChange}
          type="text"
          value={formData.title}
        />
        {errors && (
          <div style={{ color: 'red', fontSize: '12px' }}>
            {errors['title']}
          </div>
        )}
      </div>
      <Button>Save</Button>
    </form>
  );
};

export default ToDoForm;
