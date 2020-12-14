import React from 'react';
import {ErrorMessage, Field} from "formik";
import {odd_input, err} from "./Input.module.sass";
const CheckboxGroup = (props) => {
    const {label, name, options, ...rest} = props
    return (
        <div className={odd_input}>
            <Field name={name}>
                {({field}) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='checkbox'
                                    id={option.key}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value}
                                />
                                <label htmlFor={option.key}>{label}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            <ErrorMessage name={name} component="span" className={err}/>
        </div>


    )
};

export default CheckboxGroup;