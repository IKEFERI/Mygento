import React, {useCallback, useEffect} from 'react';
import {Field} from "formik";
import {odd_input} from "./Input.module.sass";
const RadioButtons = (props) => {
    const {handleForm, label, name, options, ...rest} = props;
    useEffect(() => {
        handleForm.validateField(name);
    }, [name]);

    return (
        <div className={odd_input}>
            <Field name={name}>
                {({field}) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='radio'
                                    id={option.key}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value === option.value}
                                />
                                <label htmlFor={option.key}>{option.value}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
        </div>
    )
};

export default RadioButtons;