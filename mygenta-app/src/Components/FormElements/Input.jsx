import React from "react";
import {ErrorMessage, Field} from "formik";
import {simple_input, err, invalid} from "./Input.module.sass"


const Input = (props) => {
    const {label, handleForm, name, ...rest} = props;
    return (
        <div className={simple_input}>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest}
                   className={handleForm.errors[name] && handleForm.touched[name] && invalid}/>
            <ErrorMessage name={name} component="span" className={err}/>
        </div>
    );
};

export default Input;