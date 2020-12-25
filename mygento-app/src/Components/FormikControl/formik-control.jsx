import React from 'react';
import Input from '../FormElements/input';
import CheckboxGroup from '../FormElements/checkbox-group';
import RadioButtons from '../FormElements/radio-buttons';
import File from '../FormElements/file';

const FormikControl = properties => {
  const { control, ...rest } = properties;

  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'checkbox':
      return <CheckboxGroup {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'file':
      return <File {...rest} />;
    default:
      return;
  }
};

export default FormikControl;
