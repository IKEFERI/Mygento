import React from "react";
import Input from "../FormElements/Input";
import CheckboxGroup from "../FormElements/CheckboxGroup";
import RadioButtons from "../FormElements/RadioButtons";
import File from "../FormElements/File";

const FormikControl = (props) => {
    const {control, ...rest} = props

    switch (control) {
        case "input":
            return <Input {...rest} />
        case "checkbox":
            return <CheckboxGroup {...rest} />
        case "radio":
            return <RadioButtons {...rest} />
        case "file":
            return <File {...rest} />
        default:
            return null

    }
};

export default FormikControl;