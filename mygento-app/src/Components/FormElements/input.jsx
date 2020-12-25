import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { simple_input, err as error, invalid } from './Input.module.sass';

const Input = properties => {
  const { label, handleForm, name, ...rest } = properties;
  return (
    <div className={simple_input}>
      <label htmlFor={name}>{label}</label>
      <Field
        id={name}
        name={name}
        {...rest}
        className={
          handleForm.errors[name] && handleForm.touched[name] && invalid
        }
      />
      <ErrorMessage name={name} component="span" className={error} />
    </div>
  );
};

export default Input;
