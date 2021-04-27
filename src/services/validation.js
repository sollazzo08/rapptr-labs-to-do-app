import Joi from 'joi-browser';

const validate = (formData, schema) => {
  const result = Joi.validate(formData, schema, {
    abortEarly: false,
  });

  if (!result.error) return null;
  const errors = {};
  for (let item of result.error.details) errors[item.path[0]] = item.message;
  return errors;
};

const validateProperty = ({ name, value }, schema) => {
  const obj = {
    [name]: value,
  };

  const schemaClone = {
    [name]: schema[name],
  };
  const { error } = Joi.validate(obj, schemaClone);

  return error ? error.details[0].message : null;
};

export { validate, validateProperty };
