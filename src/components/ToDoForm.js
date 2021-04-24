import React, { useState, useEffect } from 'react';
import Header from './Header';
import Input from './Input';
import * as yup from 'yup';
import '../styles/LoginForm.css';
import '../styles/main.css';

const ToDoForm = ({input, onEdit}) => {
  const [formData, setFormData] = useState({ id: "",title: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setFormData({id: 5, title:'test'})
  }, [])
  // let schema = yup.object().shape({
  //   email: yup.string().email().required(),
  //   password: yup.string().required()

  // })

  // const validate = async () => {

  //    await schema.validate(formData).catch(function (err) {
  //       console.log(err.errors)
  //     })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    //onEdit()
    // validate()
  };

  const handleChange = ({ target: input }) => {
    const formDataClone = { ...formData };
    formDataClone[input.name] = input.value;
    setFormData(formDataClone);
  };

  return (
    <form onSubmit={handleSubmit}>  
        <Input
          name="todo"
          onChange={handleChange}
          type="text"
          value={formData.todo}
        />
        <button>Save</button>
    </form>
  );
};

export default ToDoForm;
