import React from 'react';
import { ErrorMessage, Field } from 'formik';
import { odd_input, err as error } from './Input.module.sass';
const CheckboxGroup = properties => {
  const { label, name, options, ...rest } = properties;
  return (
    <div className={odd_input}>
      <Field name={name}>
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="checkbox"
                  id={option.key}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value}
                />
                <label htmlFor={option.key}>{label}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component="span" className={error} />
    </div>
  );
};

export default CheckboxGroup;
